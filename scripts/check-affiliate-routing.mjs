import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';

const source = ts.transpileModule(fs.readFileSync('src/lib/affiliate.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
function router(env = {}) {
  const exports = {};
  vm.runInNewContext(source, { exports, process: { env } });
  return exports;
}
const hotel = { slug: 'test-hotel', name: 'Test Hotel', city: 'Jaipur', region: 'Asia' };
const direct = { ...hotel, directBookingUrl: 'https://official.example/' };
const property = { ...direct, hotelsUrl: 'https://www.hotels.com/ho123/', bookingUrl: 'https://www.booking.com/hotel/in/test.html' };
const env = {
  NEXT_PUBLIC_CJ_HOTELS_COM: 'https://tracking.example/hotels?sid={sid}&url={url}',
  NEXT_PUBLIC_BOOKING_DEEPLINK_BASE: 'https://tracking.example/booking?sid={sid}&url={url}',
};
const both = router(env);
assert.equal(both.primaryBookingLink(property).network, 'Hotels.com');
assert.equal(both.primaryBookingLink({ ...property, hotelsUrl: undefined }).network, 'Booking.com');
assert.equal(both.primaryBookingLink(direct).tracked, false);
assert.equal(both.primaryBookingLink(direct).destinationType, 'official');
assert.equal(both.primaryBookingLink(hotel).destinationType, 'search');
assert.equal(new URL(both.primaryBookingLink(property).url).searchParams.get('url'), property.hotelsUrl);
assert.equal(new URL(both.primaryBookingLink(property).url).searchParams.get('sid'), 'thehotellife-test-hotel-hotels');
assert.equal(router({ NEXT_PUBLIC_BOOKING_DEEPLINK_BASE: env.NEXT_PUBLIC_BOOKING_DEEPLINK_BASE }).primaryBookingLink(property).network, 'Booking.com');
assert.equal(router().primaryBookingLink(property).url, direct.directBookingUrl);
assert.equal(router().primaryBookingLink({ ...property, directBookingUrl: undefined }).tracked, false);
assert.equal(router().primaryBookingLink(hotel).destinationType, 'search');
assert.equal(router({ NEXT_PUBLIC_CJ_ACCOR_SOUTH_ASIA: 'https://tracking.example/?url={url}' }).primaryBookingLink({ ...direct, chain: 'accor', chainUrl: 'https://all.accor.com/test' }).tracked, true);
assert.equal(both.hotelsComAffiliateLink(hotel).destinationType, 'search');
console.log('PASS: 13 affiliate routing assertions (priority, fallback, tracking, destination and attribution encoding).');
