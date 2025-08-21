import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "CHXUO",
  DESCRIPTION: "业余全栈开发者，希望能在开心快乐每一天的同时，做点有用或者有趣儿的东西",
  EMAIL: "hi@chxuo.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "主页",
  DESCRIPTION: "业余全栈开发者，希望能在开心快乐每一天的同时，做点有用或者有趣儿的东西",
};

export const BLOG: Metadata = {
  TITLE: "博客",
  DESCRIPTION: "我感兴趣的东西都在这里了",
};

export const PROJECTS: Metadata = {
  TITLE: "项目",
  DESCRIPTION: "做的一些小玩意儿",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/chxuo",
    ICON: "mingcute:github-line",
  },
  {
    NAME: "Website",
    HREF: "https://chxuo.com",
    ICON: "mingcute:web-line",
  },
  {
    NAME: "Email",
    HREF: "mailto:hi@chxuo.com",
    ICON: "mingcute:mail-line",
  },
];
