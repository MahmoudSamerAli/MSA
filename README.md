# MSA — Design & Advertise website

A simple, static site (HTML/CSS/JS, no build step) for the MSA Facebook page.
Every "order" button opens WhatsApp with a pre-filled message — there's no
backend, no forms, no database.

## 1. Before you publish

Open `script.js` and edit the top two lines:

```js
const WHATSAPP_NUMBER = "201234567890"; // your real number
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61591803773296";
```

- `WHATSAPP_NUMBER` must be in international format, digits only:
  country code + number, **no** `+`, spaces, or leading `0`.
  Example for an Egyptian number `010 1234 5678` → `201012345678`.
- Update the prices in `index.html` (search for `package-card`) whenever you
  change your rates.
- Swap the 6 "Add design" placeholders in the Portfolio section for your own
  finished work — put your image files in a new `images/` folder and replace
  the `<figure class="portfolio-item">` blocks with `<img src="images/yourfile.jpg" alt="...">`.

## 2. Publish with GitHub Pages (free)

1. Create a new **public** GitHub repository, e.g. `msa-website`.
2. Upload these four files to it: `index.html`, `style.css`, `script.js`, `README.md`
   (plus your `images/` folder once you add real work samples).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Branch: `main`, folder: `/ (root)` → **Save**.
6. Wait 1–2 minutes, then refresh the page — GitHub shows your live URL,
   something like `https://yourusername.github.io/msa-website/`.

## 3. Link it everywhere

- Add the live URL to your Facebook Page's **Website** field (About → Contact).
- Add it to your Instagram/TikTok bio if you use them.
- Include it in your WhatsApp Business profile if you set one up.

## 4. Editing later

No tools needed beyond a text editor. Open any of the three files, make a
change, re-upload to GitHub (or use GitHub's built-in web editor — click the
pencil icon on any file), and Pages redeploys automatically in about a minute.
