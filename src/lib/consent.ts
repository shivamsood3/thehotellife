/**
 * Consent Mode v2 plumbing, shared by the pre-gtag default script and the
 * banner that updates it.
 *
 * Storage keys that Google reads. functionality and security are granted
 * unconditionally: they cover the things a site cannot work without, and
 * ePrivacy's consent requirement carves out strictly necessary storage.
 * Everything that feeds advertising starts denied and only moves on an
 * explicit accept.
 */
export const CONSENT_STORAGE_KEY = "thl-consent";

export type ConsentChoice = "granted" | "denied";

/** The advertising-related signals a reader's choice actually governs. */
export const AD_CONSENT_KEYS = [
  "ad_storage",
  "ad_user_data",
  "ad_personalization",
  "analytics_storage",
] as const;

/**
 * Inline script for the document head. It must execute before gtag.js and
 * before the AdSense loader, otherwise those scripts set cookies while the
 * default is still unknown and the consent signal arrives too late to mean
 * anything.
 *
 * wait_for_update gives the banner a moment to replay a stored choice before
 * tags fall back to the denied default, which avoids throwing away the first
 * pageview of every returning reader who already accepted.
 */
export const CONSENT_DEFAULT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
try {
  if (localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'granted') {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    });
  }
} catch (e) {}
`.trim();
