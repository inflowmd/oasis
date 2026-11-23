import html from "./html";

// Preview of the redesigned homepage for Dr. Mehta. Served as a standalone document so the
// live site's layout and styles don't touch it. Hidden from search and left out of the sitemap.
export const dynamic = "force-static";

export function GET() {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
