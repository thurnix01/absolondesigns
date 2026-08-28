/**
 * Score a local business website for "bad but fixable" outreach potential.
 * Use in n8n Code node after PageSpeed + quick HTTP check nodes.
 */

const BUILDER_PATTERNS = [
  { pattern: /wix\.com|wixsite\.com/i, issue: 'Wix builder' },
  { pattern: /squarespace\.com/i, issue: 'Squarespace' },
  { pattern: /godaddy\.com\/websites/i, issue: 'GoDaddy builder' },
  { pattern: /weebly\.com/i, issue: 'Weebly' },
];

const QUALITY_RED_FLAGS = [
  { pattern: /<meta[^>]+viewport/i, issue: 'Missing viewport (mobile)', test: (html, m) => !m },
  { pattern: /<title>([^<]{0,10})<\/title>/i, issue: 'Very short page title', test: (html, m) => m && m[1].trim().length < 8 },
  { pattern: /click here|learn more here/gi, issue: 'Generic link text', test: (html, m) => (html.match(/click here/gi) || []).length > 2 },
];

/**
 * @param {object} input
 * @param {number|null} input.mobileScore 0-100
 * @param {number|null} input.desktopScore 0-100
 * @param {boolean} input.hasHttps
 * @param {boolean} input.hasViewport
 * @param {number} input.responseTimeMs
 * @param {string} input.htmlSnippet first ~50kb of HTML
 * @param {number} input.googleRating
 * @param {number} input.reviewCount
 */
function scoreWebsite(input) {
  const issues = [];
  let points = 0;

  const mobile = input.mobileScore;
  const desktop = input.desktopScore;

  if (mobile != null && mobile < 50) {
    issues.push(`Very slow mobile (${mobile})`);
    points += 35;
  } else if (mobile != null && mobile < 70) {
    issues.push(`Slow mobile (${mobile})`);
    points += 20;
  }

  if (desktop != null && desktop < 60) {
    issues.push(`Slow desktop (${desktop})`);
    points += 15;
  }

  if (input.hasHttps === false) {
    issues.push('No HTTPS');
    points += 25;
  }

  if (input.hasViewport === false) {
    issues.push('No mobile viewport');
    points += 25;
  }

  if (input.responseTimeMs > 4000) {
    issues.push(`Slow server response (${input.responseTimeMs}ms)`);
    points += 15;
  } else if (input.responseTimeMs > 2500) {
    issues.push(`Sluggish response (${input.responseTimeMs}ms)`);
    points += 8;
  }

  const html = input.htmlSnippet || '';
  for (const { pattern, issue } of BUILDER_PATTERNS) {
    if (pattern.test(html)) {
      issues.push(issue);
      points += 5;
      break;
    }
  }

  for (const { pattern, issue, test } of QUALITY_RED_FLAGS) {
    const m = html.match(pattern);
    if (test(html, m)) issues.push(issue);
  }

  // Established local business + weak site = ideal prospect
  if (input.reviewCount >= 10 && points >= 15) {
    points += 10;
    issues.push('Established on Maps, site undersells them');
  }

  let review_priority;
  if (points >= 45) review_priority = 'high';
  else if (points >= 25) review_priority = 'medium';
  else if (points >= 12) review_priority = 'low';
  else review_priority = 'skip';

  return {
    site_issues: [...new Set(issues)].join('; '),
    review_priority,
    score_points: points,
  };
}

/**
 * Parse PageSpeed API v5 response → 0-100 integer or null
 */
function parsePageSpeedScore(apiResponse) {
  const raw = apiResponse?.lighthouseResult?.categories?.performance?.score;
  if (raw == null) return null;
  return Math.round(raw * 100);
}

/**
 * Quick HTTP check results from fetch (n8n HTTP node)
 */
function quickCheckFromHtml(url, html, responseTimeMs, statusCode) {
  const hasHttps = (url || '').startsWith('https://');
  const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html || '');
  return {
    hasHttps: statusCode < 400 ? hasHttps : false,
    hasViewport,
    responseTimeMs: responseTimeMs || 0,
    htmlSnippet: (html || '').slice(0, 50000),
  };
}

// n8n Code node — merge Places + PageSpeed + HTTP check
if (typeof $input !== 'undefined') {
  const row = $input.first().json;

  const mobile = parsePageSpeedScore(row.pagespeed_mobile);
  const desktop = parsePageSpeedScore(row.pagespeed_desktop);
  const quick = quickCheckFromHtml(
    row.website,
    row.html_body || '',
    row.response_time_ms,
    row.http_status || 200
  );

  const scored = scoreWebsite({
    mobileScore: mobile,
    desktopScore: desktop,
    hasHttps: quick.hasHttps,
    hasViewport: quick.hasViewport,
    responseTimeMs: quick.responseTimeMs,
    htmlSnippet: quick.htmlSnippet,
    googleRating: parseFloat(row.google_rating) || 0,
    reviewCount: parseInt(row.review_count, 10) || 0,
  });

  return [{
    json: {
      ...row,
      mobile_pagespeed: mobile,
      desktop_pagespeed: desktop,
      has_https: quick.hasHttps,
      has_viewport: quick.hasViewport,
      response_time_ms: quick.responseTimeMs,
      site_issues: scored.site_issues,
      review_priority: scored.review_priority,
      review_status: 'new',
      discovered_at: new Date().toISOString(),
    },
  }];
}

module.exports = { scoreWebsite, parsePageSpeedScore, quickCheckFromHtml };
