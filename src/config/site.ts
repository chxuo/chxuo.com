import type { Site } from "../types";

const siteConfig: Site = {
  title: "轻河的园子",
  url: "https://chxuo.com",
  description: "行到水穷处，坐看云起时",
  author: "轻河",
  icon: "/favicon.svg",
  navigation: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "分类",
      href: "/categories",
    },
    {
      label: "归档",
      href: "/archives",
    },
    {
      label: "友链",
      href: "/friends",
    },
    {
      label: "关于",
      href: "/about",
    },
  ],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/chxuo",
      icon: "tabler:brand-github",
    },
    {
      name: "Email",
      url: "mailto:hi@chxuo.com",
      icon: "tabler:mail",
    },
  ],
};

export default siteConfig;
