# Cloudflare Pages — cbhrcom.com

Serve the Absolon Designs static export on the **cbhrcom.com** apex via Cloudflare Pages.
`n8n.cbhrcom.com` stays as its own DNS record (do not delete it).

## Build settings (use these in the Cloudflare UI)

| Setting | Value |
|--------|--------|
| Production branch | `main` |
| Framework preset | **None** (or Next.js Static HTML Export) |
| Build command | `npm ci && npm run build` |
| Build output directory | `out` |
| Root directory | `/` (repo root) |
| Node version | `20` (Environment variables → `NODE_VERSION=20` if needed) |

## Click-by-click (Cloudflare Dashboard)

1. Open [Cloudflare Dashboard](https://dash.cloudflare.com) and select the account that owns **cbhrcom.com**.
2. Left nav → **Workers & Pages**.
3. **Create** → **Pages** → **Connect to Git**.
4. Authorize GitHub if prompted, then select **`thurnix01/absolondesigns`**.
5. Project name: `cbhrcom` (or similar).
6. Enter the build settings from the table above → **Save and Deploy**.
7. Wait for the first build to finish (green success).
8. Open the project → **Custom domains** → **Set up a custom domain**.
9. Enter **`cbhrcom.com`** → continue.
10. Cloudflare will propose DNS changes for the apex. Confirm them.
11. Optionally add **`www.cbhrcom.com`** and redirect www → apex (Cloudflare can do this).

## Verify

After DNS is active (often a few minutes):

- https://cbhrcom.com/terms/
- https://cbhrcom.com/privacy/

Then paste those URLs into  
[Devvit developer settings](https://developers.reddit.com/apps/pb-content-intel/developer-settings).

## Do not change

- Keep the existing **`n8n.cbhrcom.com`** DNS record / tunnel as-is.
- Do not point `cbhrcom.com` at GitHub Pages (that domain is already used by `absolondesigns.com`).
