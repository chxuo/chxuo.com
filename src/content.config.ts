import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default("chxuo"),
      tags: z.array(z.string()).optional().default([]),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      image: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    display: z.boolean().default(true), // 控制是否显示
    status: z
      .enum(["planning", "in-progress", "completed", "maintained"])
      .default("completed"),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const tools = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/tools",
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.enum([
      "development",
      "design",
      "productivity",
      "hardware",
      "utility",
    ]),
    type: z.enum(["software", "hardware"]),
    link: z.string().url().optional(),
    icon: z.string().optional(), // Lucide icon name
    featured: z.boolean().default(false),
  }),
});

const friends = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/friends",
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    avatar: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  blog,
  projects,
  tools,
  friends,
};
