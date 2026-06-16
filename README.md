# Chalet Alpenblick — Thierachern

A one-page website showcasing **Chalet Alpenblick**, a short-term holiday rental in
Thierachern, above Lake Thun in the Bernese Oberland, Switzerland.

The site is a single static page (`index.html`) and is published with GitHub Pages at
<https://thierachern.github.io>.

## Structure

```
index.html          # The landing page
assets/             # CSS, JS and webfonts
images/             # Banner, spotlight and gallery photos + favicon
LICENSE.txt         # License for the underlying template
```

## Editing content

All copy lives directly in `index.html`, organised into clearly commented sections:
banner, welcome, location, things to do, gallery, amenities, booking and footer.

### Photos

Replace the placeholder images in `images/` with real photos of the property:

- `images/banner.jpg` — hero image
- `images/spotlight01–03.jpg` — section images
- `images/gallery/fulls/01–12.jpg` and `images/gallery/thumbs/01–12.jpg` — gallery

Keep the same filenames (or update the references in `index.html`).

### Booking form

The booking form currently posts to a placeholder Formspree endpoint. Swap the
`action` URL in the booking `<form>` for your own form/email service to receive
requests.

## Credits

Built on the **Story** template by [HTML5 UP](https://html5up.net), released free
under the [Creative Commons Attribution 3.0](https://html5up.net/license) license.
