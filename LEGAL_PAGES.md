# Legal pages (Terms & Privacy)

Added for Reddit/Devvit app settings:

- `/terms` — Terms & Conditions
- `/privacy` — Privacy Policy

## Live URLs after deploy

**GitHub Pages (already configured):**

- https://absolondesigns.com/terms
- https://absolondesigns.com/privacy

**Custom domain `cbhrcom.com` (Cloudflare):**

`cbhrcom.com` currently has Cloudflare nameservers, but the apex host does not resolve yet. `n8n.cbhrcom.com` already works.

To serve the same pages at `https://cbhrcom.com/terms` and `https://cbhrcom.com/privacy`:

1. In [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → Connect the `thurnix01/absolondesigns` GitHub repo.
2. Build settings:
   - Framework preset: Next.js (Static HTML Export) or None
   - Build command: `npm ci && npm run build`
   - Build output directory: `out`
3. After the first deploy, open **Custom domains** → add `cbhrcom.com` (and optionally `www.cbhrcom.com`).
4. Cloudflare will create the DNS records automatically.

Until that domain is connected, use the `absolondesigns.com` URLs in the [Devvit developer settings](https://developers.reddit.com/apps/pb-content-intel/developer-settings).
