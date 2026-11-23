import { siteUrl } from "../lib/dados";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/whatsapp/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
