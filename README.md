# Raleigh Expedition Packing Checklist — prototype

## What's in this folder
Only these 4 files make up the actual website:

- `index.html` — the page itself
- `styles.css` — Raleigh-branded styling
- `app.js` — filtering, tooltips, tick-boxes and the print/PDF button
- `data.js` — **all the kit list content** (items, quantities, categories, cycle rules, hover descriptions)

`gen_data.py` is just the script used to build `data.js` the first time — you don't need it in the live site, but keeping it costs nothing.

## How to preview it right now
Double-click `index.html` — it opens directly in your browser, no server needed. Pick a country, length and cycle to see the checklist build itself, hover an item name for its "why you need this" tooltip, and try the Print button (it opens your browser's print dialog — choose "Save as PDF" as the destination).

## How to update the kit list later
Everything Venturers see comes from `data.js`. To change an item, quantity, category or description, edit the relevant entry in that file and push the change to GitHub — Cloudflare will redeploy automatically within a minute or two. There's no admin screen or edit mode on the site itself, by design, so Venturers can only view and tick items, never change them.

Each item looks like this:

```js
{
  "item": "Rucksack (65-85 Litres)",
  "quantity": "1",
  "category": "essential",       // essential | recommended | optional
  "subcategory": "personal",     // personal | toiletries | firstaid | clothing
  "cycle": "all",                // "all", or 1/2/3 if only needed for one specific cycle
  "description": "This is a key bit of equipment..."
}
```

Send me updated kit lists (or just tell me what to change) any time and I'll update `data.js` for you.

One thing worth flagging: the "expedition length" filter (4/5/7/10 weeks) is wired up in the interface, but right now every item shows for every length, because the three source guides don't specify what changes by length — only by cycle (e.g. South Africa's Cycle 2 needs extra warm layers). If particular items should be added or dropped for 4/5/7-weekers vs 10-weekers, send that through and I'll add a `lengths` field to make the filter fully functional.

## Deploying to Cloudflare Pages via GitHub

**1. Create the GitHub repo**
- Go to github.com and sign in (or create a free account)
- Click "New repository" — name it something like `raleigh-packing-checklist`
- Keep it Public or Private (either works fine with Cloudflare Pages)
- Don't initialize with a README (you already have one)
- Click "Create repository"

**2. Push these files to it**
On the "quick setup" page GitHub shows you after creating the repo, run these commands from a terminal, from inside this folder:

```
git init
git add index.html styles.css app.js data.js README.md
git commit -m "Initial packing checklist prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/raleigh-packing-checklist.git
git push -u origin main
```

(Replace the URL with the one GitHub shows you. If you don't have `git` installed, GitHub also lets you drag-and-drop the files straight into the repo through the web interface — click "Add file" > "Upload files".)

**3. Connect Cloudflare Pages**
- Go to the Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git
- Authorize Cloudflare to access your GitHub account, then select the `raleigh-packing-checklist` repo
- Build settings: leave "Framework preset" as None, "Build command" blank, and "Build output directory" as `/` (this is a static site, nothing to build)
- Click "Save and Deploy"

Cloudflare will give you a `*.pages.dev` URL within a minute. From there you can add a custom domain (e.g. `packing.raleighinternational.org`) under the project's "Custom domains" tab if you'd like.

**4. Future updates**
Any time you (or I) push a change to `data.js` on the `main` branch, Cloudflare automatically rebuilds and redeploys the site — usually live within a minute, no extra steps needed.

## Questions / next steps
This is a working example built from the real South Africa, Costa Rica and Borneo kit list PDFs you linked, so you can judge the look, feel and interaction before we finalise anything. Once you're happy with the design, send through:
- Any corrections to items/quantities/descriptions already in the demo
- Whether items should vary by expedition length, and how
- Your logo file (I used a placeholder pulled from the Raleigh website) and any brand guideline colours if the ones used here aren't quite right
