import siteConfig from "@/config/site";
import { getPosts } from "@/utils/post";
import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.createdAt,
      description: post.data.summary,
      link: `/${post.id}`,
    })),
  });
}
