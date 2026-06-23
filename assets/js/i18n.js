/* ============================================================
   Alpine View Thierachern — lightweight client-side i18n
   Default language: English. Supports EN / DE / FR / IT.
   Visitor's choice is remembered in localStorage.
   ============================================================ */
(function () {
	"use strict";

	var STORAGE_KEY = "avt_lang";
	var DEFAULT_LANG = "en";

	var translations = {

		/* ---------------- English (default) ---------------- */
		en: {
			_title: "Alpine View Thierachern · Holiday House in the Bernese Oberland, Switzerland",
			_desc: "Alpine View Thierachern is a comfortable, independent house with stunning views of the Alps, a lush Mediterranean garden and a sun-kissed facade. Sleeps up to 7 in 4 bedrooms. Book your stay on Airbnb.",

			hero_p: "A comfortable, independent house with stunning views of the Alps and a lush Mediterranean garden — your peaceful base in the heart of the Bernese Oberland, Switzerland.",
			btn_book: "Book on Airbnb",
			btn_explore_house: "Explore the House",

			welcome_h2: "Your own independent house",
			welcome_p1: "Relax in this comfortable, independent single house offering stunning views of the Alps. Light-filled living spaces, a welcoming lounge and a fully equipped kitchen make it easy to feel at home from the moment you arrive.",
			welcome_p2: "With four bedrooms and room for up to seven guests, it&rsquo;s ideal for couples, families or solo travellers seeking tranquillity and scenic beauty.",
			btn_see_house: "See the House",

			views_h2: "Mediterranean garden, Alpine horizon",
			views_p1: "Surrounded by a lush Mediterranean garden, the home features a sun-kissed facade that&rsquo;s perfect for peaceful mornings and serene evenings. Step onto the patio or balcony and the snow-capped peaks of the Bernese Alps stretch out before you.",
			views_p2: "It&rsquo;s a rare combination — a warm, green garden retreat with one of Switzerland&rsquo;s great mountain panoramas right on the doorstep.",
			btn_whats_included: "What&rsquo;s Included",

			loc_h2: "Above Lake Thun, in the Bernese Oberland",
			loc_p1: "Thierachern sits on a sunny plateau just minutes from Thun&rsquo;s medieval old town and the turquoise shores of Lake Thun (Thunersee). The Stockhorn, Niesen, Interlaken and the peaks of the Jungfrau region are all within easy reach.",
			loc_p2: "Hike, ski, swim, cruise the lake or simply enjoy the view with a glass of local wine — whatever the season, this is the perfect base for your Swiss adventure.",
			btn_check_avail: "Check Availability",

			weather_h2: "Weather in Thierachern",
			weather_sub: "Plan your trip &mdash; here&rsquo;s the current local forecast.",

			gallery_h2: "Take a look inside",
			gallery_p: "From the open-plan living spaces to the bedrooms, bathrooms and that unforgettable mountain view. Click any photo to view it full size.",
			g1_h: "Dining &amp; Living", g1_p: "Open-plan space with a marble dining table and lounge.",
			g2_h: "The Kitchen", g2_p: "Fully equipped, with dishwasher and espresso machine.",
			g3_h: "Living Room", g3_p: "Unwind and relax after a day in the mountains.",
			g4_h: "Garden Bedroom", g4_p: "Bright double room opening to the garden.",
			g5_h: "Double Bedroom", g5_p: "Restful and comfortable, with fresh linen.",
			g6_h: "Room with a View", g6_p: "Wake up to the mountains from your own balcony.",
			g7_h: "Spacious Bedroom", g7_p: "Plenty of room, with wardrobe and seating.",
			g8_h: "Main Bathroom", g8_p: "Walk-in shower and a relaxing bathtub.",
			g9_h: "Second Bathroom", g9_p: "Sleek finishes and a spacious walk-in shower.",
			g10_h: "Shower Room", g10_p: "A handy extra bathroom for busy mornings.",
			g11_h: "Home Gym", g11_p: "Keep up your routine without leaving the house.",
			g12_h: "Alpine Views", g12_p: "Snow-capped peaks straight from the balcony.",

			amen_h2: "What&rsquo;s included",
			amen_p: "The whole house is yours, thoughtfully furnished for a relaxed and self-sufficient stay.",
			a1_h: "Alpine Views", a1_p: "Stunning views of the Bernese Alps from the house and garden.",
			a2_h: "Mediterranean Garden", a2_p: "A lush, sunny garden with a patio for long summer evenings.",
			a3_h: "4 Bedrooms · Sleeps 7", a3_p: "Four bedrooms with four beds and two bathrooms.",
			a4_h: "Full Kitchen", a4_p: "Dishwasher, oven and an espresso coffee machine.",
			a5_h: "Wi-Fi", a5_p: "Wireless internet throughout the house.",
			a6_h: "Central Heating", a6_p: "Full central heating keeps the whole house warm and cosy.",
			a7_h: "Indoor &amp; Outdoor Dining", a7_p: "Dining areas both inside the house and outside in the garden.",
			a8_h: "Home Gym", a8_p: "A private fitness room so you never miss a workout.",
			a9_h: "Washer", a9_p: "In-house washing machine for longer stays.",
			a10_h: "TV", a10_p: "Flat-screen TV in the living room.",
			a11_h: "Free Parking", a11_p: "Free parking on the premises.",
			a12_h: "Self Check-in", a12_p: "Arrive on your own schedule with easy self check-in.",

			explore_h2: "Explore the area",
			explore_p: "Some of Switzerland&rsquo;s most beautiful places are right on your doorstep. Here are a few favourites within easy reach of the house.",
			thun_meta: "≈ 10 min by car",
			thun_p: "A picture-perfect medieval old town with a hilltop castle, covered bridges and a lively promenade where the River Aare meets turquoise Lake Thun.",
			inter_meta: "≈ 30 min by car",
			inter_p: "The adventure capital of the Bernese Oberland, set between two lakes. The gateway to the Jungfrau region, paragliding, boat trips and mountain railways.",
			grind_meta: "≈ 50 min by car",
			grind_p: "A storybook alpine village beneath the north face of the Eiger, with world-class hiking and skiing and the First and Jungfraujoch excursions nearby.",
			credit: "Area photos: Wikimedia Commons.",

			gethere_h2: "How to get there",
			gethere_p: "Alpine View Thierachern is at Steghaltenstrasse 2, 3634 Thierachern &mdash; easy to reach by car or by public transport.",
			gh_car_h: "By car",
			gh_car_p: "From the A6 motorway, take the Thun-S&uuml;d exit and continue about 10 minutes via Uetendorf to Thierachern. Free parking is available on site.",
			gh_car_btn: "Get directions",
			gh_pt_h: "By public transport",
			gh_pt_p: "Take a train to Thun (direct InterCity connections from Bern, Zurich and Interlaken), then STI bus line 50, 51 or M27 to the &ldquo;Thierachern, Egg&rdquo; stop (about 10 minutes), followed by a short walk to the house.",
			gh_pt_btn: "Plan your journey (SBB)",

			book_h2: "Book your stay",
			book_p: "Availability, pricing and reservations are all handled securely through Airbnb. Click below to see open dates and book Alpine View Thierachern.",

			footer_p: 'Alpine View Thierachern · 3634 Thierachern, Bernese Oberland, Switzerland<br />&copy; Alpine View Thierachern. Bookings via <a href="https://www.airbnb.com/h/thierachern" target="_blank" rel="noopener">Airbnb</a>.'
		},

		/* ---------------- Deutsch ---------------- */
		de: {
			_title: "Alpine View Thierachern · Ferienhaus im Berner Oberland, Schweiz",
			_desc: "Alpine View Thierachern ist ein komfortables, freistehendes Ferienhaus mit traumhaftem Alpenblick, einem üppigen mediterranen Garten und sonniger Fassade. Platz für bis zu 7 Gäste in 4 Schlafzimmern. Jetzt auf Airbnb buchen.",

			hero_p: "Ein komfortables, freistehendes Haus mit traumhaftem Blick auf die Alpen und einem üppigen mediterranen Garten — Ihr ruhiger Rückzugsort im Herzen des Berner Oberlands, Schweiz.",
			btn_book: "Auf Airbnb buchen",
			btn_explore_house: "Das Haus entdecken",

			welcome_h2: "Ihr eigenes freistehendes Haus",
			welcome_p1: "Entspannen Sie in diesem komfortablen, freistehenden Einfamilienhaus mit atemberaubendem Blick auf die Alpen. Lichtdurchflutete Wohnräume, ein einladendes Wohnzimmer und eine voll ausgestattete Küche lassen Sie vom ersten Moment an ankommen.",
			welcome_p2: "Mit vier Schlafzimmern und Platz für bis zu sieben Gäste ist es ideal für Paare, Familien oder Alleinreisende, die Ruhe und landschaftliche Schönheit suchen.",
			btn_see_house: "Das Haus ansehen",

			views_h2: "Mediterraner Garten, alpiner Horizont",
			views_p1: "Umgeben von einem üppigen mediterranen Garten besticht das Haus mit einer sonnenverwöhnten Fassade — perfekt für ruhige Morgen und entspannte Abende. Treten Sie auf die Terrasse oder den Balkon und die schneebedeckten Gipfel der Berner Alpen breiten sich vor Ihnen aus.",
			views_p2: "Eine seltene Kombination — ein warmer, grüner Gartenrückzug mit einem der grossartigsten Bergpanoramen der Schweiz direkt vor der Tür.",
			btn_whats_included: "Ausstattung",

			loc_h2: "Über dem Thunersee, im Berner Oberland",
			loc_p1: "Thierachern liegt auf einem sonnigen Plateau, nur wenige Minuten von der mittelalterlichen Altstadt von Thun und den türkisfarbenen Ufern des Thunersees entfernt. Stockhorn, Niesen, Interlaken und die Gipfel der Jungfrau-Region sind bequem erreichbar.",
			loc_p2: "Wandern, Skifahren, Schwimmen, eine Schifffahrt auf dem See oder einfach den Ausblick bei einem Glas Wein geniessen — zu jeder Jahreszeit der perfekte Ausgangspunkt für Ihr Schweizer Abenteuer.",
			btn_check_avail: "Verfügbarkeit prüfen",

			weather_h2: "Wetter in Thierachern",
			weather_sub: "Planen Sie Ihre Reise &mdash; hier die aktuelle Vorhersage vor Ort.",

			gallery_h2: "Ein Blick ins Innere",
			gallery_p: "Von den offenen Wohnräumen über die Schlaf- und Badezimmer bis hin zum unvergesslichen Bergblick. Klicken Sie auf ein Foto, um es in voller Grösse zu sehen.",
			g1_h: "Ess- &amp; Wohnbereich", g1_p: "Offener Raum mit Esstisch aus Marmor und Lounge.",
			g2_h: "Die Küche", g2_p: "Voll ausgestattet, mit Geschirrspüler und Espressomaschine.",
			g3_h: "Wohnzimmer", g3_p: "Entspannen nach einem Tag in den Bergen.",
			g4_h: "Gartenzimmer", g4_p: "Helles Doppelzimmer mit Zugang zum Garten.",
			g5_h: "Doppelzimmer", g5_p: "Erholsam und komfortabel, mit frischer Bettwäsche.",
			g6_h: "Zimmer mit Aussicht", g6_p: "Wachen Sie mit Bergblick auf Ihrem eigenen Balkon auf.",
			g7_h: "Geräumiges Schlafzimmer", g7_p: "Viel Platz, mit Kleiderschrank und Sitzgelegenheit.",
			g8_h: "Hauptbadezimmer", g8_p: "Begehbare Dusche und entspannende Badewanne.",
			g9_h: "Zweites Badezimmer", g9_p: "Elegante Ausstattung und grosszügige begehbare Dusche.",
			g10_h: "Duschraum", g10_p: "Ein praktisches zusätzliches Bad für hektische Morgen.",
			g11_h: "Fitnessraum", g11_p: "Bleiben Sie in Form, ohne das Haus zu verlassen.",
			g12_h: "Alpenblick", g12_p: "Schneebedeckte Gipfel direkt vom Balkon.",

			amen_h2: "Ausstattung",
			amen_p: "Das ganze Haus gehört Ihnen — durchdacht eingerichtet für einen entspannten und unabhängigen Aufenthalt.",
			a1_h: "Alpenblick", a1_p: "Atemberaubender Blick auf die Berner Alpen vom Haus und Garten.",
			a2_h: "Mediterraner Garten", a2_p: "Ein üppiger, sonniger Garten mit Terrasse für lange Sommerabende.",
			a3_h: "4 Schlafzimmer · 7 Gäste", a3_p: "Vier Schlafzimmer mit vier Betten und zwei Badezimmern.",
			a4_h: "Voll ausgestattete Küche", a4_p: "Geschirrspüler, Backofen und Espressomaschine.",
			a5_h: "WLAN", a5_p: "Drahtloses Internet im ganzen Haus.",
			a6_h: "Zentralheizung", a6_p: "Eine Zentralheizung hält das ganze Haus warm und gemütlich.",
			a7_h: "Essen drinnen &amp; draussen", a7_p: "Essbereiche sowohl im Haus als auch draussen im Garten.",
			a8_h: "Fitnessraum", a8_p: "Ein privater Fitnessraum, damit Sie kein Training verpassen.",
			a9_h: "Waschmaschine", a9_p: "Waschmaschine im Haus für längere Aufenthalte.",
			a10_h: "TV", a10_p: "Flachbildfernseher im Wohnzimmer.",
			a11_h: "Kostenlose Parkplätze", a11_p: "Kostenlose Parkplätze auf dem Grundstück.",
			a12_h: "Self-Check-in", a12_p: "Reisen Sie nach Ihrem eigenen Zeitplan an — mit einfachem Self-Check-in.",

			explore_h2: "Die Umgebung entdecken",
			explore_p: "Einige der schönsten Orte der Schweiz liegen direkt vor Ihrer Tür. Hier ein paar Favoriten in der Nähe des Hauses.",
			thun_meta: "≈ 10 Min. mit dem Auto",
			thun_p: "Eine bilderbuchhafte mittelalterliche Altstadt mit Schloss auf dem Hügel, gedeckten Brücken und einer lebhaften Promenade, wo die Aare auf den türkisfarbenen Thunersee trifft.",
			inter_meta: "≈ 30 Min. mit dem Auto",
			inter_p: "Die Abenteuer-Hauptstadt des Berner Oberlands zwischen zwei Seen. Das Tor zur Jungfrau-Region, mit Gleitschirmfliegen, Bootsfahrten und Bergbahnen.",
			grind_meta: "≈ 50 Min. mit dem Auto",
			grind_p: "Ein malerisches Bergdorf am Fusse der Eiger-Nordwand, mit erstklassigem Wandern und Skifahren sowie den Ausflügen zur First und zum Jungfraujoch.",
			credit: "Fotos der Umgebung: Wikimedia Commons.",

			gethere_h2: "Anreise",
			gethere_p: "Alpine View Thierachern befindet sich an der Steghaltenstrasse 2, 3634 Thierachern &mdash; bequem mit dem Auto oder den öffentlichen Verkehrsmitteln erreichbar.",
			gh_car_h: "Mit dem Auto",
			gh_car_p: "Von der Autobahn A6 nehmen Sie die Ausfahrt Thun-Süd und fahren rund 10 Minuten über Uetendorf nach Thierachern. Kostenlose Parkplätze sind vor Ort vorhanden.",
			gh_car_btn: "Route anzeigen",
			gh_pt_h: "Mit öffentlichen Verkehrsmitteln",
			gh_pt_p: "Mit dem Zug bis Thun (direkte InterCity-Verbindungen aus Bern, Zürich und Interlaken), dann mit dem STI-Bus der Linie 50, 51 oder M27 bis zur Haltestelle &bdquo;Thierachern, Egg&ldquo; (rund 10 Minuten) und anschliessend ein kurzer Fussweg zum Haus.",
			gh_pt_btn: "Verbindung planen (SBB)",

			book_h2: "Buchen Sie Ihren Aufenthalt",
			book_p: "Verfügbarkeit, Preise und Reservierungen werden sicher über Airbnb abgewickelt. Klicken Sie unten, um freie Daten zu sehen und Alpine View Thierachern zu buchen.",

			footer_p: 'Alpine View Thierachern · 3634 Thierachern, Berner Oberland, Schweiz<br />&copy; Alpine View Thierachern. Buchungen über <a href="https://www.airbnb.com/h/thierachern" target="_blank" rel="noopener">Airbnb</a>.'
		},

		/* ---------------- Français ---------------- */
		fr: {
			_title: "Alpine View Thierachern · Maison de vacances dans l'Oberland bernois, Suisse",
			_desc: "Alpine View Thierachern est une maison indépendante et confortable offrant une vue imprenable sur les Alpes, un jardin méditerranéen luxuriant et une façade ensoleillée. Jusqu'à 7 personnes dans 4 chambres. Réservez sur Airbnb.",

			hero_p: "Une maison indépendante et confortable, avec une vue imprenable sur les Alpes et un jardin méditerranéen luxuriant — votre refuge paisible au cœur de l'Oberland bernois, en Suisse.",
			btn_book: "Réserver sur Airbnb",
			btn_explore_house: "Découvrir la maison",

			welcome_h2: "Votre maison indépendante",
			welcome_p1: "Détendez-vous dans cette maison individuelle confortable et indépendante offrant une vue magnifique sur les Alpes. Des espaces de vie lumineux, un salon accueillant et une cuisine entièrement équipée vous font sentir chez vous dès votre arrivée.",
			welcome_p2: "Avec quatre chambres et de la place pour jusqu'à sept personnes, elle est idéale pour les couples, les familles ou les voyageurs en solo en quête de tranquillité et de beauté naturelle.",
			btn_see_house: "Voir la maison",

			views_h2: "Jardin méditerranéen, horizon alpin",
			views_p1: "Entourée d'un jardin méditerranéen luxuriant, la maison arbore une façade ensoleillée, parfaite pour des matinées paisibles et des soirées sereines. Sur la terrasse ou le balcon, les sommets enneigés des Alpes bernoises s'étendent devant vous.",
			views_p2: "Une combinaison rare — un refuge chaleureux et verdoyant avec l'un des plus beaux panoramas de montagne de Suisse juste devant la porte.",
			btn_whats_included: "Équipements",

			loc_h2: "Au-dessus du lac de Thoune, dans l'Oberland bernois",
			loc_p1: "Thierachern se situe sur un plateau ensoleillé, à quelques minutes de la vieille ville médiévale de Thoune et des rives turquoise du lac de Thoune. Le Stockhorn, le Niesen, Interlaken et les sommets de la région de la Jungfrau sont facilement accessibles.",
			loc_p2: "Randonnée, ski, baignade, croisière sur le lac ou simplement profiter de la vue avec un verre de vin local — quelle que soit la saison, c'est le point de départ idéal pour votre aventure suisse.",
			btn_check_avail: "Vérifier les disponibilités",

			weather_h2: "Météo à Thierachern",
			weather_sub: "Préparez votre séjour &mdash; voici les prévisions locales actuelles.",

			gallery_h2: "Jetez un œil à l'intérieur",
			gallery_p: "Des espaces de vie ouverts aux chambres, aux salles de bain et à cette vue inoubliable sur la montagne. Cliquez sur une photo pour la voir en grand.",
			g1_h: "Salle à manger &amp; salon", g1_p: "Espace ouvert avec table à manger en marbre et coin salon.",
			g2_h: "La cuisine", g2_p: "Entièrement équipée, avec lave-vaisselle et machine à espresso.",
			g3_h: "Salon", g3_p: "Détendez-vous après une journée en montagne.",
			g4_h: "Chambre sur le jardin", g4_p: "Chambre double lumineuse ouvrant sur le jardin.",
			g5_h: "Chambre double", g5_p: "Reposante et confortable, avec linge frais.",
			g6_h: "Chambre avec vue", g6_p: "Réveillez-vous face aux montagnes depuis votre balcon.",
			g7_h: "Chambre spacieuse", g7_p: "Beaucoup d'espace, avec armoire et coin salon.",
			g8_h: "Salle de bain principale", g8_p: "Douche à l'italienne et baignoire relaxante.",
			g9_h: "Deuxième salle de bain", g9_p: "Finitions élégantes et grande douche à l'italienne.",
			g10_h: "Salle d'eau", g10_p: "Une salle de bain supplémentaire bien pratique le matin.",
			g11_h: "Salle de sport", g11_p: "Gardez votre routine sans quitter la maison.",
			g12_h: "Vue sur les Alpes", g12_p: "Sommets enneigés directement depuis le balcon.",

			amen_h2: "Équipements",
			amen_p: "Toute la maison est à vous, aménagée avec soin pour un séjour détendu et autonome.",
			a1_h: "Vue sur les Alpes", a1_p: "Vue imprenable sur les Alpes bernoises depuis la maison et le jardin.",
			a2_h: "Jardin méditerranéen", a2_p: "Un jardin luxuriant et ensoleillé avec terrasse pour les longues soirées d'été.",
			a3_h: "4 chambres · 7 personnes", a3_p: "Quatre chambres avec quatre lits et deux salles de bain.",
			a4_h: "Cuisine équipée", a4_p: "Lave-vaisselle, four et machine à espresso.",
			a5_h: "Wi-Fi", a5_p: "Internet sans fil dans toute la maison.",
			a6_h: "Chauffage central", a6_p: "Un chauffage central qui garde toute la maison chaude et confortable.",
			a7_h: "Repas intérieur &amp; extérieur", a7_p: "Espaces repas à l'intérieur de la maison et dehors dans le jardin.",
			a8_h: "Salle de sport", a8_p: "Une salle de sport privée pour ne jamais manquer un entraînement.",
			a9_h: "Lave-linge", a9_p: "Lave-linge dans la maison pour les longs séjours.",
			a10_h: "Télévision", a10_p: "Téléviseur à écran plat dans le salon.",
			a11_h: "Parking gratuit", a11_p: "Parking gratuit sur place.",
			a12_h: "Arrivée autonome", a12_p: "Arrivez à votre rythme grâce à l'arrivée autonome.",

			explore_h2: "Explorez les environs",
			explore_p: "Certains des plus beaux endroits de Suisse sont à votre porte. Voici quelques favoris faciles d'accès depuis la maison.",
			thun_meta: "≈ 10 min en voiture",
			thun_p: "Une vieille ville médiévale digne d'une carte postale, avec un château perché, des ponts couverts et une promenade animée là où l'Aar rejoint le lac de Thoune turquoise.",
			inter_meta: "≈ 30 min en voiture",
			inter_p: "La capitale de l'aventure de l'Oberland bernois, entre deux lacs. La porte d'entrée de la région de la Jungfrau, avec parapente, croisières et trains de montagne.",
			grind_meta: "≈ 50 min en voiture",
			grind_p: "Un village alpin de carte postale au pied de la face nord de l'Eiger, avec randonnées et ski d'exception et les excursions au First et au Jungfraujoch à proximité.",
			credit: "Photos des environs : Wikimedia Commons.",

			gethere_h2: "Comment s'y rendre",
			gethere_p: "Alpine View Thierachern se situe à la Steghaltenstrasse 2, 3634 Thierachern &mdash; facilement accessible en voiture ou en transports publics.",
			gh_car_h: "En voiture",
			gh_car_p: "Depuis l'autoroute A6, prenez la sortie Thun-Süd et continuez environ 10 minutes via Uetendorf jusqu'à Thierachern. Un parking gratuit est disponible sur place.",
			gh_car_btn: "Itinéraire",
			gh_pt_h: "En transports publics",
			gh_pt_p: "Prenez le train jusqu'à Thoune (liaisons InterCity directes depuis Berne, Zurich et Interlaken), puis le bus STI ligne 50, 51 ou M27 jusqu'à l'arrêt « Thierachern, Egg » (environ 10 minutes), suivi d'une courte marche jusqu'à la maison.",
			gh_pt_btn: "Planifier le trajet (CFF)",

			book_h2: "Réservez votre séjour",
			book_p: "Les disponibilités, les tarifs et les réservations sont gérés en toute sécurité via Airbnb. Cliquez ci-dessous pour voir les dates disponibles et réserver Alpine View Thierachern.",

			footer_p: 'Alpine View Thierachern · 3634 Thierachern, Oberland bernois, Suisse<br />&copy; Alpine View Thierachern. Réservations via <a href="https://www.airbnb.com/h/thierachern" target="_blank" rel="noopener">Airbnb</a>.'
		},

		/* ---------------- Italiano ---------------- */
		it: {
			_title: "Alpine View Thierachern · Casa vacanze nell'Oberland bernese, Svizzera",
			_desc: "Alpine View Thierachern è una casa indipendente e confortevole con splendida vista sulle Alpi, un rigoglioso giardino mediterraneo e una facciata soleggiata. Fino a 7 ospiti in 4 camere. Prenota su Airbnb.",

			hero_p: "Una casa indipendente e confortevole, con splendida vista sulle Alpi e un rigoglioso giardino mediterraneo — il vostro rifugio tranquillo nel cuore dell'Oberland bernese, in Svizzera.",
			btn_book: "Prenota su Airbnb",
			btn_explore_house: "Scopri la casa",

			welcome_h2: "La vostra casa indipendente",
			welcome_p1: "Rilassatevi in questa casa indipendente e confortevole con splendida vista sulle Alpi. Spazi luminosi, un accogliente soggiorno e una cucina completamente attrezzata vi faranno sentire a casa fin dal primo momento.",
			welcome_p2: "Con quattro camere da letto e spazio per un massimo di sette ospiti, è ideale per coppie, famiglie o viaggiatori solitari in cerca di tranquillità e bellezza paesaggistica.",
			btn_see_house: "Guarda la casa",

			views_h2: "Giardino mediterraneo, orizzonte alpino",
			views_p1: "Circondata da un rigoglioso giardino mediterraneo, la casa presenta una facciata baciata dal sole, perfetta per mattine tranquille e serate serene. Uscite sulla terrazza o sul balcone e le cime innevate delle Alpi bernesi si apriranno davanti a voi.",
			views_p2: "Una combinazione rara — un caldo e verde rifugio con giardino e uno dei più bei panorami montani della Svizzera proprio davanti alla porta.",
			btn_whats_included: "Servizi",

			loc_h2: "Sopra il lago di Thun, nell'Oberland bernese",
			loc_p1: "Thierachern si trova su un soleggiato altopiano, a pochi minuti dal centro storico medievale di Thun e dalle rive turchesi del lago di Thun. Stockhorn, Niesen, Interlaken e le cime della regione della Jungfrau sono facilmente raggiungibili.",
			loc_p2: "Escursioni, sci, nuoto, una crociera sul lago o semplicemente godersi il panorama con un bicchiere di vino locale — in qualsiasi stagione, è il punto di partenza perfetto per la vostra avventura svizzera.",
			btn_check_avail: "Verifica disponibilità",

			weather_h2: "Meteo a Thierachern",
			weather_sub: "Pianifica il tuo viaggio &mdash; ecco le previsioni locali attuali.",

			gallery_h2: "Date un'occhiata all'interno",
			gallery_p: "Dagli spazi open space alle camere da letto, ai bagni e a quella indimenticabile vista sulle montagne. Cliccate su una foto per vederla a grandezza naturale.",
			g1_h: "Zona pranzo &amp; soggiorno", g1_p: "Spazio open space con tavolo da pranzo in marmo e zona salotto.",
			g2_h: "La cucina", g2_p: "Completamente attrezzata, con lavastoviglie e macchina per espresso.",
			g3_h: "Soggiorno", g3_p: "Rilassatevi dopo una giornata in montagna.",
			g4_h: "Camera sul giardino", g4_p: "Luminosa camera matrimoniale con accesso al giardino.",
			g5_h: "Camera matrimoniale", g5_p: "Riposante e confortevole, con biancheria fresca.",
			g6_h: "Camera con vista", g6_p: "Svegliatevi con le montagne dal vostro balcone.",
			g7_h: "Camera spaziosa", g7_p: "Tanto spazio, con armadio e zona seduta.",
			g8_h: "Bagno principale", g8_p: "Doccia a pavimento e vasca rilassante.",
			g9_h: "Secondo bagno", g9_p: "Finiture eleganti e ampia doccia a pavimento.",
			g10_h: "Locale doccia", g10_p: "Un comodo bagno in più per le mattine indaffarate.",
			g11_h: "Palestra", g11_p: "Mantenete la vostra routine senza uscire di casa.",
			g12_h: "Vista sulle Alpi", g12_p: "Cime innevate direttamente dal balcone.",

			amen_h2: "Servizi",
			amen_p: "Tutta la casa è vostra, arredata con cura per un soggiorno rilassato e autonomo.",
			a1_h: "Vista sulle Alpi", a1_p: "Splendida vista sulle Alpi bernesi dalla casa e dal giardino.",
			a2_h: "Giardino mediterraneo", a2_p: "Un giardino rigoglioso e soleggiato con terrazza per le lunghe serate estive.",
			a3_h: "4 camere · 7 ospiti", a3_p: "Quattro camere con quattro letti e due bagni.",
			a4_h: "Cucina attrezzata", a4_p: "Lavastoviglie, forno e macchina per espresso.",
			a5_h: "Wi-Fi", a5_p: "Internet wireless in tutta la casa.",
			a6_h: "Riscaldamento centrale", a6_p: "Un riscaldamento centrale mantiene tutta la casa calda e accogliente.",
			a7_h: "Pranzo dentro &amp; fuori", a7_p: "Zone pranzo sia all'interno della casa sia fuori in giardino.",
			a8_h: "Palestra", a8_p: "Una palestra privata per non perdere mai un allenamento.",
			a9_h: "Lavatrice", a9_p: "Lavatrice in casa per i soggiorni più lunghi.",
			a10_h: "TV", a10_p: "Televisore a schermo piatto nel soggiorno.",
			a11_h: "Parcheggio gratuito", a11_p: "Parcheggio gratuito in loco.",
			a12_h: "Check-in autonomo", a12_p: "Arrivate secondo i vostri tempi grazie al check-in autonomo.",

			explore_h2: "Esplora la zona",
			explore_p: "Alcuni dei luoghi più belli della Svizzera sono proprio davanti alla porta. Ecco alcuni preferiti facilmente raggiungibili dalla casa.",
			thun_meta: "≈ 10 min in auto",
			thun_p: "Un centro storico medievale da cartolina, con castello in collina, ponti coperti e un'animata passeggiata dove l'Aare incontra il turchese lago di Thun.",
			inter_meta: "≈ 30 min in auto",
			inter_p: "La capitale dell'avventura dell'Oberland bernese, tra due laghi. La porta d'accesso alla regione della Jungfrau, con parapendio, gite in barca e ferrovie di montagna.",
			grind_meta: "≈ 50 min in auto",
			grind_p: "Un pittoresco villaggio alpino ai piedi della parete nord dell'Eiger, con escursioni e sci di livello mondiale e le gite al First e allo Jungfraujoch nelle vicinanze.",
			credit: "Foto della zona: Wikimedia Commons.",

			gethere_h2: "Come arrivare",
			gethere_p: "Alpine View Thierachern si trova in Steghaltenstrasse 2, 3634 Thierachern &mdash; facilmente raggiungibile in auto o con i mezzi pubblici.",
			gh_car_h: "In auto",
			gh_car_p: "Dall'autostrada A6 prendete l'uscita Thun-Süd e proseguite circa 10 minuti attraverso Uetendorf fino a Thierachern. Parcheggio gratuito disponibile in loco.",
			gh_car_btn: "Indicazioni",
			gh_pt_h: "Con i mezzi pubblici",
			gh_pt_p: "Prendete il treno fino a Thun (collegamenti InterCity diretti da Berna, Zurigo e Interlaken), poi il bus STI linea 50, 51 o M27 fino alla fermata «Thierachern, Egg» (circa 10 minuti), seguito da una breve passeggiata fino alla casa.",
			gh_pt_btn: "Pianifica il viaggio (FFS)",

			book_h2: "Prenota il tuo soggiorno",
			book_p: "Disponibilità, prezzi e prenotazioni sono gestiti in modo sicuro tramite Airbnb. Clicca qui sotto per vedere le date libere e prenotare Alpine View Thierachern.",

			footer_p: 'Alpine View Thierachern · 3634 Thierachern, Oberland bernese, Svizzera<br />&copy; Alpine View Thierachern. Prenotazioni tramite <a href="https://www.airbnb.com/h/thierachern" target="_blank" rel="noopener">Airbnb</a>.'
		}
	};

	function getStored() {
		try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
	}

	function setStored(lang) {
		try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
	}

	function applyLang(lang) {
		if (!translations[lang]) lang = DEFAULT_LANG;
		var dict = translations[lang];

		document.documentElement.setAttribute("lang", lang);
		if (dict._title) document.title = dict._title;

		var desc = document.querySelector('meta[name="description"]');
		if (desc && dict._desc) desc.setAttribute("content", dict._desc);

		var nodes = document.querySelectorAll("[data-i18n]");
		for (var i = 0; i < nodes.length; i++) {
			var key = nodes[i].getAttribute("data-i18n");
			if (dict[key] != null) nodes[i].innerHTML = dict[key];
		}

		var btns = document.querySelectorAll("#lang-switcher .lang-btn");
		for (var j = 0; j < btns.length; j++) {
			var isActive = btns[j].getAttribute("data-lang") === lang;
			btns[j].classList.toggle("active", isActive);
			btns[j].setAttribute("aria-pressed", isActive ? "true" : "false");
		}

		// SBB journey planner: keep the destination preset and match the language.
		var sbb = document.getElementById("sbb-link");
		if (sbb) sbb.setAttribute("href", "https://www.sbb.ch/" + lang + "?nach=Thierachern,+Egg");

		window.AVT_LANG = lang;
		setStored(lang);

		// Let other widgets (e.g. the weather card) re-localize.
		try {
			document.dispatchEvent(new CustomEvent("avt:langchange", { detail: { lang: lang } }));
		} catch (e) {}
	}

	function init() {
		var stored = getStored();
		var initial = stored && translations[stored] ? stored : DEFAULT_LANG;
		applyLang(initial);

		var btns = document.querySelectorAll("#lang-switcher .lang-btn");
		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", function () {
				applyLang(this.getAttribute("data-lang"));
			});
		}
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
