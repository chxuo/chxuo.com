import type { SiteConfig, NavItem } from "./types";

export const siteConfig: SiteConfig = {
  title: "chxuo",
  description: "",
  author: "chxuo",
  locale: "zh-CN",
  social: [
    {
      name: "email",
      href: "hi@chxuo.com",
    },
    {
      name: "github",
      href: "https://github.com/chxuo",
    },
  ],
};

export const navItems: NavItem[] = [
  {
    name: "首页",
    href: "/",
  },
  {
    name: "博客",
    href: "/blog",
  },
  {
    name: "项目",
    href: "/projects",
  },
  {
    name: "工具",
    href: "/tools",
  },
  {
    name: "朋友",
    href: "/friends",
  },
];
