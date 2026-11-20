/** Canonical site settings for SEO, GTM, and social previews. */
export const SITE_URL = "https://absolondesigns.com";
export const SITE_NAME = "Absolon Designs";
export const SITE_TITLE = "Absolon Designs - Graphic Designer & Front-End Developer";
export const SITE_DESCRIPTION =
  "Personal portfolio for a Graphic Designer and Front-End Developer based in Victoria, British Columbia, Canada";

/** Google Search Console HTML tag verification */
export const GOOGLE_SITE_VERIFICATION = "e_dQsjI8jvrMmr2liNoyv9PJ15gPEqtZtha2f-hlAd4";

/** Google Tag Manager container (configure GA4 / ads tags inside GTM) */
export const GTM_ID = "GTM-P2L473TN";

/** Open Graph / Facebook Sharing Debugger image (must be absolute HTTPS). */
export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  width: 2400,
  height: 1260,
  alt: "Terence Absolon — Digital Marketing Specialist | Absolon Designs",
  type: "image/jpeg",
} as const;
