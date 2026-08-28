# Manual review checklist

Use this when reviewing rows in the **`prospects_review`** Google Sheet.  
The automation **finds and scores** — you **decide** who to contact.

---

## Column guide

| Column | Meaning |
|--------|---------|
| `review_priority` | **high** / **medium** / **low** / **skip** — automated guess |
| `review_status` | You set: `new` → `approved` / `skip` / `contacted` |
| `site_issues` | Why the scorer flagged it |
| `mobile_pagespeed` | 0–100 (Google PageSpeed). Under 60 = usually fixable |
| `google_rating` | High rating + bad site = great prospect |

---

## Quick review (30 seconds per row)

Check **yes** to at least 3 → mark `review_status` = **approved**

- [ ] Real local business (not a chain HQ or wrong listing)
- [ ] They **have a website** worth improving (not just Facebook)
- [ ] Site looks dated, cluttered, slow, or broken on your phone
- [ ] Business seems established (reviews, years in business, real address)
- [ ] You can name **3 specific fixes** without a sales call
- [ ] You'd be proud to show a before/after for this niche

Mark **skip** if:

- [ ] Site is already modern (scorer wrong — happens)
- [ ] Franchise / corporate site
- [ ] No website or only social media
- [ ] Business looks closed or sketchy
- [ ] You wouldn't want this client

---

## Priority cheat sheet

| `review_priority` | What to do |
|-------------------|------------|
| **high** | Review first. Often: slow mobile + established Maps presence |
| **medium** | Good queue for this week |
| **low** | Optional — minor issues only |
| **skip** | Ignore unless you know the owner |

---

## After you approve a row

1. Add `notes` — your 3 quick wins (for your audit email)
2. Set `review_status` = `approved`
3. Find contact email (website contact page, info@domain)
4. Send **short personal email** — not the old registry newsletter
5. Set `review_status` = `contacted` + date in notes

---

## Example notes (Tempo Trend–style)

```
APPROVED 2026-08-27
- Homepage is very long; lessons/repairs/rentals compete
- Typo: "minte condition"
- Mobile: hard to tap phone number
Freebie: 5-min Loom with 3 fixes
```

---

## Sort order in Google Sheets

1. Filter `review_status` = `new`
2. Sort `review_priority` custom order: high → medium → low
3. Sort `review_count` descending (established businesses first)
