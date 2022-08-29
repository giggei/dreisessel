export async function GET() {
    return new Response(
        `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
        <!-- <url> elements go here -->
        <url>
            <loc>https://schutzhaus-dreisessel.de/</loc>
            <lastmod>2022-08-29T09:20:06+00:00</lastmod>
            <priority>1.00</priority>
        </url>
        <url>
            <loc>https://schutzhaus-dreisessel.de/geschichte</loc>
            <lastmod>2022-08-29T09:20:06+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://schutzhaus-dreisessel.de/umbau</loc>
            <lastmod>2022-08-29T09:20:06+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://schutzhaus-dreisessel.de/paechter</loc>
            <lastmod>2022-08-29T09:20:06+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://schutzhaus-dreisessel.de/blog</loc>
            <lastmod>2022-08-29T09:20:06+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://schutzhaus-dreisessel.de/spenden</loc>
            <lastmod>2022-08-29T09:20:06+00:00</lastmod>
            <priority>0.80</priority>
        </url>
      </urlset>`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    );
}