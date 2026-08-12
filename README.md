# Raleigh Expedition Packing Checklist — prototype

## What's in this folder
Only these 4 files make up the actual website — all 4 need to sit in the same folder in your GitHub repo:

- `index.html` — the page itself
- `styles.css` — Raleigh-branded styling
- `app.js` — filtering, tooltips, tick-boxes and the print/PDF button
- `data.js` — **all the kit list content** (items, quantities, categories, cycle rules, hover descriptions)

`gen_data.py` is just the script used to build `data.js` — not needed on the live site, but harmless to leave out of the repo.

## How to preview it right now
Double-click `index.html` — it opens directly in your browser, no server needed.

## What's new in this version
- Added a fourth destination, **Legacies**, built from the Alumni Packing List you sent. Legacies has no cycles and only one expedition length, so the site automatically skips those two filter steps for it and jumps straight to the checklist once you pick "Legacies" as the destination.
- Refined the colour palette towards Raleigh's actual look (deep green + burnt orange) — see the caveat below.
- Essential / Recommended / Optional sections now have a coloured left border and a tinted heading so they're easier to tell apart at a glance.
- Added a visible line above the checklist reminding people to hover or tap an item name for details.
- Quantities now render as a bolder, boxed value so they're easier to read on both desktop and mobile.
- Fixed the item tooltip going off-screen on mobile — on touch devices/small screens it now pins to the bottom of the screen instead of trying to follow a cursor that isn't there. Tapping an item name toggles it; tapping elsewhere closes it.
- The printed/PDF checklist no longer includes the Cycle column — just a tick box, item, and quantity.

**Colour caveat:** I don't have a way to inspect your live site's actual CSS from here (no browser tool connected, and the site's stylesheet isn't fetchable as plain text), so these colours are still an informed estimate, not an exact match. If you have hex codes from a brand guide, send them and I'll drop them in exactly.

## How to update the kit list later
Everything Venturers see comes from `data.js`. To change an item, quantity, category or description, edit the relevant entry in that file and push the change to GitHub — Cloudflare will redeploy automatically within a minute or two. There's no admin screen or edit mode on the site itself, by design.

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

Destinations are configured near the top of `data.js`:

```js
{ "id": "south-africa", "name": "South Africa", "hasCycles": true, "lengths": [10, 7, 5, 4] }
{ "id": "legacies", "name": "Legacies", "hasCycles": false, "lengths": ["Legacy Expedition"] }
```

Set `hasCycles: false` and give a destination a single-item `lengths` list any time you add a programme that (like Legacies) doesn't run in cycles or across multiple lengths.

One thing still flagged from before: the "expedition length" filter (4/5/7/10 weeks) is wired up for South Africa, Costa Rica and Borneo, but every item currently shows for every length, since the source guides don't specify what changes by length — only by cycle. Send that through whenever you're ready and I'll wire it in.

## Deploying to Cloudflare Pages via GitHub

**1. Create the GitHub repo**
- Go to github.com and sign in (or create a free account)
- Click "New repository" — name it something like `raleigh-packing-checklist`
- Keep it Public or Private (either works fine with Cloudflare Pages)
- Don't initialize with a README (you already have one)
- Click "Create repository"

**2. Push these files to it**
Easiest no-terminal way: on your new repo's page, click **Add file** → **Upload files**, then drag in `index.html`, `styles.css`, `app.js`, `data.js` (and `README.md` if you like) all at once, and commit. Check afterwards that all four show up side by side in the repo — if only `index.html` appears, the others didn't upload and the site will look unstyled.

If you prefer the command line, from inside this folder:
```
git init
git add index.html styles.css app.js data.js README.md
git commit -m "Initial packing checklist prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/raleigh-packing-checklist.git
git push -u origin main
```

**3. Connect Cloudflare Pages**
- Go to the Cloudflare dashboard (dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git**
- Authorize Cloudflare for GitHub, then select the `raleigh-packing-checklist` repo → **Begin setup**
- Project name: anything you like; Production branch: `main`; Framework preset: **None**; Build command: blank; Build output directory: `/`
- Click **Save and Deploy**

You'll get a `*.pages.dev` URL within about a minute. Add a custom domain later from the project's **Custom domains** tab if you want one.

**4. Future updates**
Any time you push a change to these files on the `main` branch, Cloudflare automatically redeploys — usually live within a minute.

## Still on hold, waiting on your input
- Exact Raleigh brand hex codes, if you have them
- Whether/how items should vary by expedition length (4 vs 5 vs 7 vs 10 weeks)
