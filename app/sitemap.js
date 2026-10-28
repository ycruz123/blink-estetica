import { servicos, siteUrl } from "../lib/dados";

export default function sitemap() {
  const agora = new Date();

  return [
    { url: siteUrl, lastModified: agora, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/sinistro`,
      lastModified: agora,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicos.map((s) => ({
      url: `${siteUrl}/${s.slug}`,
      lastModified: agora,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
