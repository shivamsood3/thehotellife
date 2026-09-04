const body = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,noarchive"><title>Temporarily Unavailable · The Hotel Life</title>
<style>body{margin:0;background:#f7f5f4;color:#4a1d34;font-family:Arial,sans-serif}.wrap{min-height:100vh;display:grid;place-items:center;padding:24px}.card{max-width:640px;padding:64px 32px;background:#fff;border:1px solid rgba(74,29,52,.15);text-align:center;border-radius:6px}.eyebrow{color:#00718f;font-size:12px;letter-spacing:.2em;text-transform:uppercase;font-weight:700}.code{font-size:84px;line-height:1;margin:18px 0;color:#efeae8;font-weight:700}h1{font-size:42px;line-height:1.1;margin:0 0 16px}p{color:#6b4152;line-height:1.7}a{display:inline-block;margin-top:20px;border-radius:999px;background:#4a1d34;color:#f7f5f4;padding:13px 28px;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:.12em}</style></head>
<body><main class="wrap"><section class="card"><div class="eyebrow">The Hotel Life</div><div class="code">503</div><h1>We’re preparing the room.</h1><p>The site is temporarily unavailable while we make an improvement. Please return in a few minutes.</p><a href="/">TRY THE HOMEPAGE</a></section></main></body></html>`;

export function GET() {
  return new Response(body, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      "Retry-After": "300",
      "X-Robots-Tag": "noindex, noarchive",
    },
  });
}
