import { articles } from "@/content/articles";
import { bestHotelsLists } from "@/content/best-hotels";
import { guides } from "@/content/guides";
import { hotels } from "@/content/hotels";

type Pick = { label: string; title: string; description: string; href: string };

function publishedInMonth(label: string, month: string) {
  const match = /^(\w+)(?:\s+\d{1,2},?)?\s+(\d{4})$/.exec(label);
  return Boolean(match && `${match[1]} ${match[2]}` === month);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character] ?? character);
}

/** The first-of-month issue only features work published in the month just ended. */
export function makeMonthlyNewsletter(now: Date, postalAddress: string) {
  const previous = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1));
  const period = previous.toISOString().slice(0, 7);
  const month = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" }).format(previous);
  const picks: Pick[] = [];

  const hotel = hotels.find((item) => publishedInMonth(item.year, month));
  if (hotel) picks.push({ label: "The Review", title: hotel.name, description: hotel.excerpt, href: `/hotels/${hotel.slug}` });

  const guide = guides.find((item) => publishedInMonth(item.date, month));
  if (guide) picks.push({ label: "The Guide", title: guide.title, description: guide.dek, href: `/guides/${guide.slug}` });

  const list = bestHotelsLists.find((item) => item.updatedISO.startsWith(period));
  if (list) picks.push({ label: "The List", title: list.title, description: list.dek, href: `/best-hotels/${list.slug}` });

  const article = articles.find((item) => item.date === month);
  if (article) picks.push({ label: "The Edit", title: article.title, description: article.dek, href: `/the-edit/${article.slug}` });

  // Empty months do not generate a recycled issue.
  if (picks.length < 2) return null;

  const site = "https://www.thehotellife.com";
  const subject = `The Concierge | ${month}: ${picks[0].title}`;
  const items = picks.map((pick, index) => {
    const url = `${site}${pick.href}`;
    return `<tr><td class="content-pad" style="padding:30px 42px 32px;border-bottom:1px solid #e9e2e5"><p style="margin:0 0 13px;color:#00718f;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;line-height:1.5;text-transform:uppercase">${String(index + 1).padStart(2, "0")} &nbsp;/&nbsp; ${escapeHtml(pick.label)}</p><h2 style="margin:0 0 13px;color:#4a1d34;font-family:Georgia,'Times New Roman',serif;font-size:27px;font-weight:normal;line-height:1.22">${escapeHtml(pick.title)}</h2><p style="margin:0 0 18px;color:#4f4549;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7">${escapeHtml(pick.description)}</p><a href="${url}" style="color:#00718f;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:.3px;text-decoration:underline;text-underline-offset:3px">Read ${escapeHtml(pick.label.toLowerCase())} &rarr;</a></td></tr>`;
  }).join("");
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><title>${escapeHtml(subject)}</title>
<style>@media screen and (max-width:620px){.email-shell{width:100%!important}.outer-pad{padding:0!important}.brand-pad{padding:23px 24px!important}.hero-pad{padding:34px 24px 36px!important}.content-pad{padding:27px 24px 29px!important}.footer-pad{padding:29px 24px!important}.hero-title{font-size:33px!important;line-height:1.16!important}.brand-name{font-size:23px!important}.issue-date{font-size:10px!important}}</style></head>
<body style="margin:0;padding:0;background:#f7f5f4;color:#4a1d34;font-family:Arial,Helvetica,sans-serif"><div style="display:none!important;max-height:0;overflow:hidden;opacity:0;color:transparent">A considered edit of new hotel reviews, guides and lists from The Hotel Life.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#f7f5f4"><tr><td class="outer-pad" align="center" style="padding:34px 16px 42px">
<table role="presentation" class="email-shell" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;background:#ffffff">
<tr><td style="height:5px;background:#00a6de;font-size:1px;line-height:1px">&nbsp;</td></tr>
<tr><td class="brand-pad" style="padding:24px 42px;background:#ffffff"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td valign="middle" style="white-space:nowrap"><a href="${site}" style="display:inline-block;color:#4a1d34;text-decoration:none"><img src="${site}/icon-96.png" width="40" height="40" alt="The Hotel Life" style="display:inline-block;width:40px;height:40px;vertical-align:middle;border:0"><span class="brand-name" style="display:inline-block;margin-left:10px;color:#4a1d34;font-family:Arial,Helvetica,sans-serif;font-size:25px;letter-spacing:-1px;vertical-align:middle">The <strong>Hotel Life</strong></span></a></td><td class="issue-date" align="right" valign="middle" style="color:#806f78;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1px;white-space:nowrap">${escapeHtml(month.toUpperCase())}</td></tr></table></td></tr>
<tr><td class="hero-pad" style="padding:43px 42px 45px;background:#4a1d34"><p style="margin:0 0 18px;color:#62d1ee;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase">The Concierge &nbsp; / &nbsp; ${escapeHtml(month)}</p><h1 class="hero-title" style="margin:0 0 18px;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:39px;font-weight:normal;line-height:1.17">Good places change the journey.</h1><p style="margin:0;color:#f0e5ea;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7">A monthly note from The Hotel Life: the rooms, neighbourhoods and journeys that earned a closer look.</p></td></tr>
<tr><td class="content-pad" style="padding:29px 42px 25px;border-bottom:1px solid #e9e2e5"><p style="margin:0;color:#6a5961;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.65">This issue gathers the stories we published this month. Settle in.</p></td></tr>
${items}
<tr><td class="content-pad" style="padding:28px 42px 33px;background:#faf8f7"><p style="margin:0 0 9px;color:#4a1d34;font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:1.3">Until the next journey.</p><p style="margin:0;color:#685b61;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6">The Hotel Life editors</p></td></tr>
<tr><td class="footer-pad" style="padding:30px 42px;background:#4a1d34;color:#e9dce2;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.75"><p style="margin:0 0 12px;color:#ffffff;font-size:14px;font-weight:700">The Hotel Life</p><p style="margin:0 0 14px">A Hacoco Capital publication.<br>You receive The Concierge because you subscribed at The Hotel Life.<br>${escapeHtml(postalAddress)}</p><p style="margin:0"><a href="${site}" style="color:#8dddf3;text-decoration:underline">Visit the site</a> &nbsp;&middot;&nbsp; <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#8dddf3;text-decoration:underline">Unsubscribe</a></p></td></tr>
</table></td></tr></table></body></html>`;
  const text = `The Concierge · ${month}\nThe Hotel Life\n\nThe stays and places that stayed with us this month.\n\n${picks.map((pick) => `${pick.label}: ${pick.title}\n${pick.description}\n${site}${pick.href}`).join("\n\n")}\n\nYou receive The Concierge because you subscribed at The Hotel Life.\n${postalAddress}\nUnsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}`;

  return { period, month, subject, html, text, count: picks.length };
}
