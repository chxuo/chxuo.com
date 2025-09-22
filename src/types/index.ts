import type { icons } from "@lucide/astro";

interface Link {
  name: string;
  href: string;
  icon?: keyof typeof icons;
  external?: boolean;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  locale: string;
  social: Link[];
}

export type NavItem = Link;

export interface BentoCard {
  id: string;
  title?: string;
  description?: string;
  size: "small" | "medium" | "large" | "tall" | "wide";
  className?: string;
  href?: string;
}

export interface Theme {
  name: string;
  value: string;
}

export interface DashboardStats {
  totalPosts: number;
  totalProjects: number;
  totalWords: number;
  lastUpdate: string;
}

export interface WakaTimeData {
  today: string;
  week: string;
  languages: Array<{
    name: string;
    percent: number;
    time: string;
  }>;
}

export interface HeatmapData {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface HeadProps {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: string;
  openGraphType?: string;
}
