# Canwood Construction — website

Static site for Zachary Stermer's Canwood Construction (Westmount, QC).
No build step: `index.html`, `styles.css`, `script.js`, `assets/`.

## Run locally

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173.

## Before launch

- **RBQ licence number** — replace `XXXX-XXXX-XX` in the footer of `index.html` (search for `class="todo"`).
- **Contact form** — the form posts to `https://formspree.io/f/YOUR_FORM_ID`. Create a Formspree form (or Netlify Forms, Basin, etc.) and replace `YOUR_FORM_ID`. Until then, submitting shows a note telling people to call.
- **Instagram** — the photos came from Instagram; add the profile link to the footer once the handle is confirmed. It was left out rather than guessed.
- **Domain** — the site is published with GitHub Pages at https://bspokeventures.github.io/canwood/. If it moves to a custom domain, update the `og:image`, `og:url`, canonical and JSON-LD `url` values in the `<head>`.
- **Copy** — the "note from Zachary", the five project phases and the neighbourhood blurbs are drafts written in his voice. He should read them and change anything that isn't how he actually works.
- **Driving times** in the Areas section are rough off-peak estimates from the Sherbrooke office.

## Images

Originals are in `images/` (untouched). Web versions are in `assets/img/` as JPG + WebP at 1600px and 900px, named by room and material. To regenerate after adding photos, resize with ImageMagick:

```bash
magick images/NEW.jpg -auto-orient -strip -resize "1600x1600>" -quality 82 assets/img/slug-1600.jpg
```

## Design notes

- Palette sampled from the work: paper `#F5F4F1`, plaster `#ECE9E3`, walnut `#2F1E16`, oak `#B9884F`, marble-vein grey `#776F67`.
- Type: Newsreader (headlines, letter) and Archivo at 125% width for the "stamp" voice (nav, labels, plates, buttons). Both from Google Fonts.
- Every photograph is captioned with a *plate*: room name plus the materials in it. Keep that pattern when adding work.
