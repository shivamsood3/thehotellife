# September 21 editorial batch

## Commission and evidence

Publisher confirmed that all six hotels were visited during 2026 and assigned Zinnia Thapar as writer. Abode Bombay was explicitly replaced with **Abode by the Beach, Ahangama, Sri Lanka**, not the garden property Abode Ahangama. No exact stay dates, room allocations, meals, staff conversations, numerical ratings or paid rates were supplied. The copy does not invent these details. Publication date is not presented as an exact stay date.

Six new hotel reviews, three new destination decision guides, two Edit features and six replacement guides are included. Sources are recorded beside each article in the content files and displayed to readers. The palace-hotel feature is an analysis of documented restoration and hospitality, not a claimed interview with employees.

## Hotel reviews

- Ahilya by the Sea — `/hotels/ahilya-by-the-sea`
- The Postcard Cuelim — `/hotels/the-postcard-cuelim`
- Abode by the Beach — `/hotels/abode-by-the-beach-sri-lanka`
- Soho House Mumbai — `/hotels/soho-house-mumbai`
- The Oberoi Rajvilas — `/hotels/the-oberoi-rajvilas-jaipur`
- Haveli Dharampura — `/hotels/haveli-dharampura-delhi`

The three new guides compare Goa bases, Mumbai neighbourhoods and Jaipur resort versus haveli stays. The Edit features cover room upgrades and the work behind heritage hotels. Rewritten guides: Maldives, first safari, Sri Lanka, Marrakech, Amalfi Coast and Paris. Existing publication dates and bylines remain; substantial rewrites receive a separate updated date. No new top-ten list was commissioned. Existing Goa, Jaipur, Delhi and Mumbai lists link to the relevant new reviews.

## Booking limitations

Exact Hotels.com property links identified for Cuelim, Rajvilas and Dharampura; existing configured affiliate routing handles these. Dharampura's OTA listing groups Golden Haveli with Haveli Dharampura, so the review tells readers to confirm their building. This is not a promise of availability or commission credit on a completed transaction.

Abode and Soho House now use verified Booking.com property paths through the configured affiliate template. Ahilya remains an explicitly non-earning official direct link; no exact affiliate listing was verified. Four older reviews with saved Hotels.com property URLs no longer have those URLs overridden by their official direct fallback. Ranked lists now reuse the reviewed hotel's booking route. Unreviewed list entries may still use searches, labelled as searches rather than verified property links.

## Photography provenance

The six new images were fetched from property-controlled pages/assets and visually checked against the source. Official origin establishes identity, not a republication licence. Obtain or retain the property's press-use permission before relying on these as cleared editorial photography; replace with the writers' own licensed stay images if preferred.

- `ahilya-by-the-sea-official.jpg`: https://ahilyabythesea.com/wp-content/uploads/2017/06/Our-story-image-1-b.jpg
- `postcard-cuelim-official.jpg`: https://dax6u9k4peaex.cloudfront.net/assets/images/banners/hotel/main_banner_cuelim1.jpg
- `abode-by-the-beach-official.webp`: https://www.abodeboutiquehotels.com/images/beach/rooms/rock-suite-1.webp
- `soho-house-mumbai-official.png`: https://media.fastly.sohohousedigital.com/f_auto,q_auto,fl_progressive:steep,w_1600/t_4:3_fill-crop/t_dc_base/sitecore-prod/images/dotcom-sites/bedrooms-2024/mumbai/small/sh_mumbai_yadnyeshjoshi_240104_small_43_01.png
- `oberoi-rajvilas-official.jpg`: https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/rajvilas-new/overview/banner/desktop1920x980/banner1.jpg
- `haveli-dharampura-official.webp`: https://www.havelidharampura.com/assets/images/old-times-haveli.webp

## Implementation and checks

New reviews intentionally omit numerical ratings and historical prices until substantiated. Cards, review pages, FAQs and structured data handle these omissions without fake scores or misleading rate claims. Related hotels now prioritise city, then country, then region. References and contextual reading links render below the articles. Sitemap dates reflect the revised content dates.

Run `npm run build`, `npm run lint` and `node scripts/check-editorial-batch.mjs`. The batch check validates minimum depth, non-repeated paragraphs, local image paths, internal links, canonical and description metadata, parseable structured data, Zinnia's hotel byline and absence of invented scores/rates. Browser inspection is additional to these checks, not a substitute.

No production deployment was performed for this batch. Six photo-permission requests were sent from the publisher's Gmail and confirmed in Sent on September 22. Permission is pending, not granted. See `photo-permissions-and-partnerships-2026-09-22.md` for recipients and the remaining 14 direct-booking hotels. Confirm photography permission or replace the images with cleared assets before publication.
