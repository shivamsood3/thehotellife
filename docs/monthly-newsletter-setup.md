# The Concierge: monthly delivery

The signup form already saves each valid address to the site's private subscriber store. The monthly sender is deliberately off until a Resend account, verified sending domain and mailing address are configured. Do not enable it with Resend's shared `onboarding@resend.dev` sender.

## Activation checklist

1. Create a Resend account, verify `thehotellife.com` in Resend, and create a segment named `The Concierge`.
2. Add these **Production** environment variables to the Vercel project:
   - `RESEND_API_KEY`: a Resend API key with Contacts and Broadcasts access.
   - `RESEND_SEGMENT_ID`: the segment ID.
   - `NEWSLETTER_FROM`: for example `The Hotel Life <newsletter@thehotellife.com>`, after domain verification.
   - `NEWSLETTER_POSTAL_ADDRESS`: the real business mailing address to display in each issue.
   - `CRON_SECRET`: a random secret of at least 16 characters. Vercel passes it in the cron request's Bearer header.
   - `NEWSLETTER_ENABLED=true`: add only after a preview and a real end-to-end test.
3. Redeploy after adding environment variables. Confirm the verified domain, segment, subscriber sync, test broadcast, unsubscribe and final email rendering in the Resend dashboard.
4. Then set `NEWSLETTER_ENABLED=true` and redeploy again.

The protected `GET /api/cron/monthly-newsletter?preview=1` route returns the proposed subject and story count without creating a broadcast. Include `Authorization: Bearer <CRON_SECRET>`. Do not manually call the route without `preview=1` after activation unless you intend to send that month's issue.

The Vercel cron runs at 03:30 UTC on the first day of each month (09:00 India time). It features work dated in the preceding month and skips a month without at least two new pieces. It syncs the existing private subscriber list to Resend before sending. Existing Resend opt-outs are never reactivated by that sync; Resend excludes them from Broadcasts.

Each issue is sent only once. A private Blob marker at `newsletter/sends/YYYY-MM.json` records the attempt. If Resend returns an error after a send may have started, the marker remains: check the Resend Broadcasts dashboard before any manual retry. Never delete the marker simply because the route returned an error.

`/api/subscribers` remains protected by `SUBSCRIBERS_TOKEN` for a private count/CSV export. Do not expose the token, subscriber addresses, or the Resend key in client code or logs. The monthly route requires `CRON_SECRET` even when sending is disabled.

The current signup page promises a **monthly** issue. If the Resend account remains unconfigured, the site can collect signups but cannot send the issue; do not advertise a firm send date until activation is complete.
