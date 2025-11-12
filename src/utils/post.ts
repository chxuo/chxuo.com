import { getCollection, type CollectionEntry } from "astro:content";

export interface CategoryItem {
  category: CollectionEntry<"categories">;
  postCount: number;
}

export const getPosts = async () => {
  const posts = await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return posts.sort((a, b) => {
    const aDate = new Date(a.data.createdAt).valueOf();
    const bDate = new Date(b.data.createdAt).valueOf();
    return bDate - aDate;
  });
};

export const getPostsByCategory = async (category: string) => {
  const posts = await getPosts();
  return posts.filter((post) => post.data.category == category);
};

export const getPostsByTag = async (tagName: string) => {
  const posts = await getPosts();
  return posts.filter((post) => post.data.tags.includes(tagName));
};

export const getCategoryMap = async () => {
  const categoryMap = new Map<string, CollectionEntry<"posts">[]>();
  const posts = await getPosts();
  posts.map((post) => {
    const category = post.data.category || "default";
    let posts = categoryMap.get(category);
    if (!posts) {
      posts = [];
    }
    posts.push(post);

    categoryMap.set(category, posts);
  });
  return categoryMap;
};

export const getCategories = async () => {
  return await getCollection("categories");
};

export const getCategory = async (name: string) => {
  const categories = await getCollection("categories");
  return categories.find((category) => category.data.name == name);
};

export const getTags = async () => {
  const tags = new Map<string, number>();
  const posts = await getPosts();
  posts.map((post) => {
    if (!post.data.tags) {
      return;
    }

    post.data.tags.map((tag: string) => {
      tags.set(tag, (tags.get(tag) || 0) + 1);
    });
  });
  return tags;
};

export const getTag = async (name: string) => {
  const tags = await getCollection("tags");
  return tags.find((tag) => tag.data.name == name);
};
