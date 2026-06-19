/* ============================================================
   Alpine View Thierachern — current weather + 3-day forecast
   Data: Open-Meteo (keyless, free, CORS-enabled). No API key.
   Re-localizes automatically when the language switcher fires
   the "avt:langchange" event. Fails silently (section stays
   hidden) if the network or API is unavailable.
   ============================================================ */
(function () {
	"use strict";

	// Thierachern, Bernese Oberland (≈ 46.74 N, 7.58 E)
	var LAT = 46.745;
	var LON = 7.578;
	var API =
		"https://api.open-meteo.com/v1/forecast" +
		"?latitude=" + LAT + "&longitude=" + LON +
		"&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m" +
		"&daily=weather_code,temperature_2m_max,temperature_2m_min" +
		"&timezone=Europe%2FZurich&forecast_days=4";

	var state = { data: null };

	/* ---- localized strings ---- */
	var L = {
		en: {
			today: "Today", feels: "Feels like", wind: "Wind", humidity: "Humidity",
			c: ["Clear sky", "Mainly clear", "Partly cloudy", "Overcast", "Fog",
				"Drizzle", "Rain", "Freezing rain", "Snow", "Rain showers",
				"Snow showers", "Thunderstorm"],
			credit: "Live weather by Open-Meteo"
		},
		de: {
			today: "Heute", feels: "Gefühlt", wind: "Wind", humidity: "Luftfeuchte",
			c: ["Klarer Himmel", "Überwiegend klar", "Teils bewölkt", "Bedeckt", "Nebel",
				"Nieselregen", "Regen", "Gefrierender Regen", "Schnee", "Regenschauer",
				"Schneeschauer", "Gewitter"],
			credit: "Live-Wetter von Open-Meteo"
		},
		fr: {
			today: "Aujourd'hui", feels: "Ressenti", wind: "Vent", humidity: "Humidité",
			c: ["Ciel dégagé", "Plutôt dégagé", "Partiellement nuageux", "Couvert", "Brouillard",
				"Bruine", "Pluie", "Pluie verglaçante", "Neige", "Averses de pluie",
				"Averses de neige", "Orage"],
			credit: "Météo en direct par Open-Meteo"
		},
		it: {
			today: "Oggi", feels: "Percepita", wind: "Vento", humidity: "Umidità",
			c: ["Sereno", "Prevalentemente sereno", "Parz. nuvoloso", "Coperto", "Nebbia",
				"Pioggerella", "Pioggia", "Pioggia gelata", "Neve", "Rovesci di pioggia",
				"Rovesci di neve", "Temporale"],
			credit: "Meteo in tempo reale da Open-Meteo"
		}
	};

	var LOCALE = { en: "en-GB", de: "de-CH", fr: "fr-CH", it: "it-CH" };

	function lang() {
		var l = window.AVT_LANG;
		if (!l) { try { l = localStorage.getItem("avt_lang"); } catch (e) {} }
		return L[l] ? l : "en";
	}

	/* ---- map a WMO weather code to an icon key + label index ---- */
	function classify(code) {
		if (code === 0) return { icon: "clear", i: 0 };
		if (code === 1) return { icon: "clear", i: 1 };
		if (code === 2) return { icon: "partly", i: 2 };
		if (code === 3) return { icon: "cloudy", i: 3 };
		if (code === 45 || code === 48) return { icon: "fog", i: 4 };
		if (code >= 51 && code <= 57) return { icon: "drizzle", i: 5 };
		if (code >= 61 && code <= 65) return { icon: "rain", i: 6 };
		if (code === 66 || code === 67) return { icon: "sleet", i: 7 };
		if ((code >= 71 && code <= 77)) return { icon: "snow", i: 8 };
		if (code >= 80 && code <= 82) return { icon: "rain", i: 9 };
		if (code === 85 || code === 86) return { icon: "snow", i: 10 };
		if (code >= 95) return { icon: "thunder", i: 11 };
		return { icon: "cloudy", i: 3 };
	}

	/* ---- SVG weather icons (viewBox 0 0 64 64) ---- */
	var sun = function (cx, cy, r, rays) {
		var s = "";
		if (rays) {
			s += '<g stroke="#f6a623" stroke-width="3" stroke-linecap="round">';
			for (var a = 0; a < 8; a++) {
				var ang = (a * Math.PI) / 4;
				var x1 = cx + Math.cos(ang) * (r + 4), y1 = cy + Math.sin(ang) * (r + 4);
				var x2 = cx + Math.cos(ang) * (r + 9), y2 = cy + Math.sin(ang) * (r + 9);
				s += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) +
					'" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '"/>';
			}
			s += "</g>";
		}
		s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#f6b73c"/>';
		return s;
	};

	var cloud = function (x, y, scale, color) {
		scale = scale || 1;
		color = color || "#c2ccd6";
		return '<g transform="translate(' + x + ',' + y + ') scale(' + scale + ')" fill="' + color + '">' +
			'<circle cx="-12" cy="6" r="10"/>' +
			'<circle cx="2" cy="0" r="14"/>' +
			'<circle cx="13" cy="7" r="9"/>' +
			'<rect x="-16" y="8" width="32" height="11" rx="5.5"/>' +
			"</g>";
	};

	var drops = function (color) {
		return '<g stroke="' + color + '" stroke-width="3" stroke-linecap="round">' +
			'<line x1="24" y1="52" x2="21" y2="60"/>' +
			'<line x1="34" y1="52" x2="31" y2="60"/>' +
			'<line x1="44" y1="52" x2="41" y2="60"/></g>';
	};

	var flakes = function () {
		return '<g fill="#9cc3e0">' +
			'<circle cx="23" cy="56" r="2.6"/>' +
			'<circle cx="34" cy="58" r="2.6"/>' +
			'<circle cx="44" cy="56" r="2.6"/></g>';
	};

	var ICONS = {
		clear: function () {
			return '<svg viewBox="0 0 64 64" aria-hidden="true">' + sun(32, 32, 12, true) + "</svg>";
		},
		partly: function () {
			return '<svg viewBox="0 0 64 64" aria-hidden="true">' +
				sun(24, 22, 9, true) + cloud(34, 36, 1, "#c9d3dd") + "</svg>";
		},
		cloudy: function () {
			return '<svg viewBox="0 0 64 64" aria-hidden="true">' + cloud(32, 30, 1.1, "#b9c4cf") + "</svg>";
		},
		fog: function () {
			return '<svg viewBox="0 0 64 64" aria-hidden="true">' + cloud(32, 24, 1, "#c2ccd6") +
				'<g stroke="#aeb8c2" stroke-width="3" stroke-linecap="round">' +
				'<line x1="16" y1="50" x2="48" y2="50"/>' +
				'<line x1="20" y1="57" x2="44" y2="57"/></g></svg>';
		},
		drizzle: function () {
			return '<svg viewBox="0 0 64 64" aria-hidden="true">' + cloud(32, 24, 1, "#aab6c1") +
				'<g stroke="#4a90d9" stroke-width="3" stroke-linecap="round">' +
				'<line x1="26" y1="52" x2="24" y2="58"/>' +
				'<line x1="38" y1="52" x2="36" y2="58"/></g></svg>';
		},
		rain: function () {
			return '<svg viewBox="0 0 64 64" aria-hidden="true">' + cloud(32, 24, 1, "#9aa6b2") + drops("#4a90d9") + "</svg>";
		},
		sleet: function () {
			return '<svg viewBox="0 0 64 64" aria-hidden="true">' + cloud(32, 24, 1, "#9aa6b2") +
				'<g stroke="#4a90d9" stroke-width="3" stroke-linecap="round">' +
				'<line x1="26" y1="52" x2="23" y2="60"/></g>' +
				'<g fill="#9cc3e0"><circle cx="40" cy="56" r="2.6"/></g></svg>';
		},
		snow: function () {
			return '<svg viewBox="0 0 64 64" aria-hidden="true">' + cloud(32, 24, 1, "#b9c4cf") + flakes() + "</svg>";
		},
		thunder: function () {
			return '<svg viewBox="0 0 64 64" aria-hidden="true">' + cloud(32, 24, 1, "#8b97a3") +
				'<path d="M34 49 L26 60 L32 60 L29 67 L41 55 L34 55 L38 49 Z" fill="#f6a623"/></svg>';
		}
	};

	function iconFor(code) {
		var c = classify(code);
		return ICONS[c.icon] ? ICONS[c.icon]() : ICONS.cloudy();
	}

	function temp(v) { return Math.round(v) + "\u00B0"; }

	function render() {
		var host = document.getElementById("wx");
		var section = document.getElementById("weather");
		if (!host || !state.data) return;

		var lg = lang();
		var t = L[lg];
		var d = state.data;
		var cur = d.current;
		var daily = d.daily;
		var curClass = classify(cur.weather_code);

		var html = "";

		/* current conditions */
		html += '<div class="wx-current">';
		html += '<div class="wx-icon wx-icon-lg">' + iconFor(cur.weather_code) + "</div>";
		html += '<div class="wx-now">';
		html += '<span class="wx-temp">' + temp(cur.temperature_2m) + "</span>";
		html += '<span class="wx-cond">' + t.c[curClass.i] + "</span>";
		html += '<span class="wx-meta">' +
			t.feels + " " + temp(cur.apparent_temperature) + " &middot; " +
			t.wind + " " + Math.round(cur.wind_speed_10m) + " km/h &middot; " +
			t.humidity + " " + Math.round(cur.relative_humidity_2m) + "%" +
			"</span>";
		html += "</div></div>";

		/* 3-day forecast (skip today = index 0) */
		var fmt = new Intl.DateTimeFormat(LOCALE[lg] || "en-GB", { weekday: "short" });
		html += '<div class="wx-forecast">';
		for (var i = 1; i <= 3 && i < daily.time.length; i++) {
			var date = new Date(daily.time[i] + "T12:00:00");
			var dayName = fmt.format(date);
			dayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
			html += '<div class="wx-day">';
			html += "<span class=\"wx-dow\">" + dayName + "</span>";
			html += '<div class="wx-icon">' + iconFor(daily.weather_code[i]) + "</div>";
			html += '<span class="wx-range"><strong>' + temp(daily.temperature_2m_max[i]) +
				"</strong> " + temp(daily.temperature_2m_min[i]) + "</span>";
			html += "</div>";
		}
		html += "</div>";

		html += '<div class="wx-credit">' + t.credit + "</div>";

		host.innerHTML = html;
		if (section) section.hidden = false;
	}

	function fetchWeather() {
		if (!window.fetch) return;
		fetch(API)
			.then(function (r) { return r.ok ? r.json() : null; })
			.then(function (json) {
				if (!json || !json.current || !json.daily) return;
				state.data = json;
				render();
			})
			.catch(function () { /* stay hidden on failure */ });
	}

	document.addEventListener("avt:langchange", render);

	function start() { fetchWeather(); }
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", start);
	} else {
		start();
	}
})();
