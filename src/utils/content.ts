import { getCollection, type CollectionEntry } from "astro:content";

// project
export const getProjects = async () => {
  const projects: CollectionEntry<"projects">[] =
    await getCollection("projects");
  return projects.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
};

export const getFeaturedProjects = async () => {
  const projects = await getProjects();
  const featuredProjects = projects
    .filter((project) => project.data.featured && project.data.display)
    .slice(0, 5);
  return featuredProjects;
};

// blog
export const getBlog = async () => {
  const blog: CollectionEntry<"blog">[] = await getCollection(
    "blog",
    ({ data }: CollectionEntry<"blog">) => {
      return import.meta.env.PROD ? data.draft !== true : true;
    },
  );

  return blog.sort((a, b) => {
    const aDate = new Date(a.data.pubDate).valueOf();
    const bDate = new Date(b.data.pubDate).valueOf();
    return bDate - aDate;
  });
};

export const getLatestBlog = async () => {
  const blog = await getBlog();
  return blog.slice(0, 5);
};
