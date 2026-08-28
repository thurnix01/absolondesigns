# Local Bad-Site Scanner (review only — no email)

Finds **Vancouver Island businesses on Google Maps** that have a **website** but score poorly on speed, mobile, and basic quality checks. Results land in **Google Sheets** for you to review.

**Does not send email.** You approve rows manually, then outreach on your own.

---

## What you get each run

```text
Manual or weekly trigger
  → Google Places: "{category} in {city} BC"
  → Keep businesses WITH a website
  → Skip if already in Sheet (place_id)
  → PageSpeed (mobile + desktop) + quick HTTP check
  → Score → review_priority: high | medium | low | skip
  → Append to Google Sheet for your review
```

---

## Prerequisites

### 1. Google Cloud API key

One key can power both APIs:

1. [Google Cloud Console](https://console.cloud.google.com/) → create project
2. Enable:
   - **Places API (New)**
   - **PageSpeed Insights API**
3. Create **API key** → restrict to those two APIs
4. Billing enabled (Places uses [$200/mo free Maps credit](https://developers.google.com/maps/billing-and-pricing); PageSpeed is free with quota)

Store key in n8n as **Header Auth** or env `GOOGLE_API_KEY`.

### 2. Google Sheet

Create: **`Absolon VI Prospects Review`**

| Tab | Purpose |
|-----|---------|
| `prospects_review` | Import `database/prospects-review-headers.csv` as row 1 |
| `config` | Settings (see below) |
| `run_log` | Optional — last run stats |

**`config` tab** (columns: `key` | `value`):

| key | value | description |
|-----|-------|-------------|
| `queries_per_run` | `3` | City×category searches per execution |
| `max_score_per_run` | `12` | Max websites to PageSpeed per run |
| `min_review_count` | `3` | Skip Maps listings with fewer reviews |
| `city_index` | `0` | Auto-incremented — rotates cities |
| `category_index` | `0` | Auto-incremented — rotates categories |
| `use_pagespeed` | `true` | Set `false` for HTTP-only (faster, less accurate) |

### 3. n8n

- Import `n8n/local-bad-site-scanner.json`
- Replace `YOUR_GOOGLE_SHEET_ID` in all Google Sheets nodes
- Set Google API key on **Places Search** and **PageSpeed** nodes

---

## Import workflow

1. n8n → **Import from file** → `n8n/local-bad-site-scanner.json`
2. Open each node with `YOUR_GOOGLE_SHEET_ID` and paste your Sheet ID
3. **Places Search** node → Header `X-Goog-Api-Key: YOUR_KEY`
4. **PageSpeed Mobile/Desktop** nodes → query param `key=YOUR_KEY`
5. Run **Manual Trigger** once with `max_score_per_run: 3` to test

---

## Your weekly routine (~20 min)

1. **Run workflow** (manual or Monday 8am schedule)
2. Open Sheet → filter `review_status` = `new`, sort `review_priority`
3. Use **`REVIEW-CHECKLIST.md`** — mark rows `approved` or `skip`
4. For **approved**: note 3 fixes, send personal email when ready
5. Increase `max_score_per_run` once comfortable (12–20)

---

## Cost estimate

| Action | Approx. cost per run |
|--------|----------------------|
| 3 Places searches × 15 results | ~$0.15 (within free credit) |
| 12 PageSpeed calls | Free (within daily quota) |
| **Weekly** | Well under $1 if capped |

---

## Customize searches

Edit `data/search-categories.json` and `data/vancouver-island-locations.json`, then sync lists in the **Build Search Queue** Code node (or reload from file if using n8n with filesystem access).

Default categories include: music store, diesel repair, trades, bike shop, marine, etc.

---

## Scoring logic

See `scripts/website-score.js`. Summary:

| Signal | Effect |
|--------|--------|
| Mobile PageSpeed &lt; 50 | High priority |
| Mobile PageSpeed 50–69 | Medium |
| No HTTPS / no viewport | High |
| Slow response &gt; 4s | Medium |
| Wix/Squarespace detected | Small boost |
| 10+ Google reviews + weak site | **Ideal** — boost priority |

`skip` = site is probably fine; don't waste outreach.

---

## Files

| Path | Purpose |
|------|---------|
| `n8n/local-bad-site-scanner.json` | Importable workflow |
| `scripts/website-score.js` | Scoring logic (also embedded in workflow) |
| `data/search-categories.json` | What to search for |
| `data/vancouver-island-locations.json` | Where to search |
| `database/prospects-review-headers.csv` | Sheet columns |
| `REVIEW-CHECKLIST.md` | How you review rows |

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Places 403 | Enable Places API (New); check API key |
| PageSpeed 429 | Lower `max_score_per_run`; add 2s delay between calls |
| Empty results | Try broader query; check city name spelling |
| Good site marked high | Set `review_status=skip`; scorer is heuristic |
| No website in results | Expected — workflow skips businesses without `websiteUri` |

---

## What changed from the registry pipeline

| Old (OrgBook) | New (this scanner) |
|---------------|-------------------|
| Legal business names | Real Maps listings |
| No addresses | Full address + phone |
| No websites | Website URL required |
| Auto-email | **You review only** |
| Weak targeting | Matches Level 1 / Tempo Trend profile |

The registry workflow in `../n8n/` is optional — use **this** for outreach prospecting.

## Quick start (5 steps)

1. Create Google Sheet → import `database/prospects-review-headers.csv` and `database/config-headers.csv`
2. [Get Google API key](https://console.cloud.google.com/) → enable **Places API (New)** + **PageSpeed Insights API**
3. Import `n8n/local-bad-site-scanner.json` into n8n
4. Replace `YOUR_GOOGLE_SHEET_ID` and `YOUR_GOOGLE_API_KEY` in all nodes
5. **Manual Run** → open Sheet → filter `review_status=new`, sort by `review_priority`
