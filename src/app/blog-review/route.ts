import article from "./article";

export const dynamic = "force-static";

export function GET() {
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><meta name="referrer" content="no-referrer">
<title>Oasis Vein &amp; Vitality | Article draft for review</title>
<style>
:root{color-scheme:light;--ink:#172f2d;--muted:#415651;--accent:#126052;--paper:#fcfaf5;--line:#c9d2c4}
*{box-sizing:border-box}
body{margin:0;color:var(--ink);background:var(--paper);font:1.07rem/1.65 system-ui,sans-serif}
main{max-width:49rem;margin:auto;padding:clamp(1.25rem,5vw,4rem)}
.eyebrow{color:var(--accent);font-size:.86rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
aside{background:#edf4ed;border-left:.25rem solid var(--accent);color:#27453d;padding:.85rem 1rem;margin:1.4rem 0 2rem}
h1,h2{line-height:1.17;font-family:Georgia,serif;font-weight:500;letter-spacing:-.025em}
h1{font-size:clamp(2rem,6vw,3.25rem);margin:0 0 1rem}
h2{font-size:clamp(1.45rem,4vw,2rem);margin:1.8rem 0 .6rem}
p{margin:.6rem 0 1.15rem}
ol{padding-inline-start:1.55rem}li{padding-inline-start:.25rem;margin:.45rem 0}
a{color:var(--accent);text-underline-offset:.15em;overflow-wrap:anywhere}
a:focus-visible{outline:.15rem solid var(--accent);outline-offset:.2rem}
</style></head><body><main>
<p class="eyebrow">Oasis Vein &amp; Vitality · Editorial review</p>
<aside aria-label="Draft status"><strong>Draft for clinician review.</strong> Not approved for publication.</aside>
<article>${article}</article>
</main></body></html>`;
  return new Response(html, { headers: {
    "Content-Type": "text/html; charset=utf-8",
    "X-Robots-Tag": "noindex, nofollow",
    "Referrer-Policy": "no-referrer",
    "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
  } });
}
