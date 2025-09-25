import rss from "@astrojs/rss";
import { siteConfig } from "@/config";
import { getBlog } from "@/utils/content";

export async function GET(context) {
  const blog = await getBlog();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      categories: post.data.tags || [],
    })),
    customData: `<language>zh-cn</language>`,
  });
}
