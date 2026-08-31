# Raleigh International — Expedition Packing Checklist

A static site (no backend) for Expedition Participants to view their personal packing checklist, filtered by destination, expedition length, and cycle.

## Files to upload to GitHub

- `index.html` — page structure
- `styles.css` — Raleigh-branded styling
- `app.js` — filtering, tooltip, tick-box and print logic
- `data.js` — all packing list content (edit this file to update kit lists)
- `README.md` — this file (optional to upload, but useful for future reference)

## How it works

- Content lives entirely in `data.js`. To add or change an item, edit the relevant destination's list there — no other file needs to change.
- The site is not editable by visitors. Updates are made to `data.js` and pushed to GitHub.
- Each item can have: category (essential/recommended/optional), subcategory (personal/toiletries/first aid/clothing), which cycle it applies to, which expedition lengths it applies to, and an optional quantity override by length.
- Tick-boxes ("Got it") are saved in each visitor's own browser (localStorage) — not shared or synced anywhere.
- The Print / Save as PDF button uses the browser's native print function — no third-party service involved.

## Deploying via GitHub → Cloudflare Pages

1. Create a new GitHub repository (public or private).
2. Upload all 4 site files (`index.html`, `styles.css`, `app.js`, `data.js`) together in one commit. Double check all 4 appear in the repo before continuing.
3. In Cloudflare, go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Select the repository.
5. Framework preset: **None**. Build command: leave blank. Build output directory: `/`.
6. Click **Save and Deploy**.
7. Every future push to the repo will automatically redeploy the site.

## Still open / needs your input

- Costa Rica and Borneo don't yet have confirmed length-specific item differences (only South Africa's 4/5/7/10-week variation is confirmed) — the site currently shows the same items for all lengths for these two destinations, with a note to that effect.
- The 5-week South Africa spending money figure isn't specified in any source document provided so far.
- Legacies has no cycle or length variation (single "Legacy Expedition" list), per your instructions.

## Example: adding a new item in data.js

```js
item("Example item", "1", "essential", "personal", "all", "descriptionkey")
```

See the comments at the top of `data.js` for the full field reference.
