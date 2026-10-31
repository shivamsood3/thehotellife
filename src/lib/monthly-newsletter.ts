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
  const items = picks.map((pick) => {
    const url = `${site}${pick.href}`;
    return `<tr><td style="padding:0 0 28px"><p style="margin:0 0 8px;color:#087b9a;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase">${escapeHtml(pick.label)}</p><h2 style="margin:0 0 8px;color:#4a1d34;font-family:Georgia,serif;font-size:25px;line-height:1.25">${escapeHtml(pick.title)}</h2><p style="margin:0 0 12px;color:#493e43;font-size:15px;line-height:1.65">${escapeHtml(pick.description)}</p><a href="${url}" style="color:#087b9a;font-size:14px;font-weight:700">Read the story →</a></td></tr>`;
  }).join("");
  const html = `<!doctype html><html lang="en"><body style="margin:0;background:#f5f2f0;font-family:Arial,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr><td align="center" style="padding:32px 16px"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#fff"><tr><td style="background:#4a1d34;padding:28px 32px;color:#fff"><p style="margin:0 0 8px;color:#8ad7e4;font-size:11px;letter-spacing:.2em;text-transform:uppercase">The Concierge · ${escapeHtml(month)}</p><h1 style="margin:0;font-family:Georgia,serif;font-size:32px">The Hotel Life</h1></td></tr><tr><td style="padding:30px 32px 8px"><p style="margin:0 0 28px;color:#493e43;font-size:16px;line-height:1.7">The stays and places that stayed with us this month, selected from our latest published reviews, guides and lists.</p><table role="presentation" width="100%" cellspacing="0" cellpadding="0">${items}</table></td></tr><tr><td style="background:#f5f2f0;padding:24px 32px;color:#6b6166;font-size:12px;line-height:1.6">You receive The Concierge because you subscribed at The Hotel Life.<br>${escapeHtml(postalAddress)}<br><a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#087b9a">Unsubscribe</a> · <a href="${site}" style="color:#087b9a">Visit The Hotel Life</a></td></tr></table></td></tr></table></body></html>`;
  const text = `The Concierge · ${month}\nThe Hotel Life\n\nThe stays and places that stayed with us this month.\n\n${picks.map((pick) => `${pick.label}: ${pick.title}\n${pick.description}\n${site}${pick.href}`).join("\n\n")}\n\nYou receive The Concierge because you subscribed at The Hotel Life.\n${postalAddress}\nUnsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}`;

  return { period, month, subject, html, text, count: picks.length };
}
