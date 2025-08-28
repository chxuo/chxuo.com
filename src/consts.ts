import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "CHXUO",
  DESCRIPTION: "业余全栈开发者，希望能在开心快乐每一天的同时，做点有用或者有趣儿的东西",
  EMAIL: "hi@chxuo.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  PLAUSIBLE_DOMAIN: "chxuo.com",
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

export const TOOLS: Metadata = {
  TITLE: "装备库",
  DESCRIPTION: "日常使用的一些工具，包括开发工具和其他软硬件",
}

export const FRIENDS: Metadata = {
  TITLE: "朋友们",
  DESCRIPTION: "志同道合的朋友们，一起在互联网上创造有趣的内容",
}

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
