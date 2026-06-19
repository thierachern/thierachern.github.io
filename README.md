# Alpine View Thierachern

A one-page website showcasing **Alpine View Thierachern**, an independent holiday
house with stunning Alpine views and a Mediterranean garden in Thierachern, above
Lake Thun in the Bernese Oberland, Switzerland.

All bookings are handled through Airbnb — the site links straight to the listing
rather than taking reservations directly:
<https://www.airbnb.com/h/thierachern>

The site is a single static page (`index.html`) published with GitHub Pages at
<https://thierachern.github.io>.

## Structure

```
index.html          # The landing page
assets/             # CSS, JS and webfonts
images/             # Banner, spotlight and gallery photos + favicon
LICENSE.txt         # License for the underlying template
```

## Languages

The site is available in **English (default), German, French and Italian**. A flag
switcher (top‑right of the page) lets visitors change language; the choice is
remembered in the browser via `localStorage`.

Translation is handled client‑side:

- Each translatable element in `index.html` carries a `data-i18n="key"` attribute.
- All strings for every language live in `assets/js/i18n.js` (one block per
  language: `en`, `de`, `fr`, `it`).

To change wording, edit the matching key in **every** language block in
`assets/js/i18n.js` (and the English default text in `index.html`, which is what
shows before the script runs / if JavaScript is disabled). To add a new
translatable string, give the element a `data-i18n` attribute and add the key to
each language block.

## Weather

The location section is followed by a **live weather card** for Thierachern
(current conditions plus a 3‑day forecast with sunny / cloudy / rainy / snow /
thunder / fog icons). Data comes from the free, keyless
[Open‑Meteo](https://open-meteo.com/) API, fetched client‑side in
`assets/js/weather.js`. The card re‑localizes with the language switcher and, if
the API is unreachable, the whole section simply stays hidden (no broken UI).
Coordinates are set near the top of `weather.js` (`LAT` / `LON`).

## Editing content

All copy lives directly in `index.html`, organised into clearly commented sections:
banner, the house, garden & views, location, gallery, amenities, booking CTA and
footer. Every "Book" / "Check Availability" button points to the Airbnb listing.

### Photos

The photos in `images/` are the property's real listing photos:

- `images/banner.jpg` — hero (house & garden)
- `images/spotlight01–03.jpg` — section images
- `images/gallery/fulls/01–12.jpg` and `images/gallery/thumbs/01–12.jpg` — gallery

To swap any photo, replace the file keeping the same name (or update the reference
in `index.html`).

## Credits

Built on the **Story** template by [HTML5 UP](https://html5up.net), released free
under the [Creative Commons Attribution 3.0](https://html5up.net/license) license.
