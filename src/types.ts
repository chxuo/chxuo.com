interface OpenGraph {
  title: string;
  description: string;
  image?: string;
}

interface Twitter {
  title: string;
  description: string;
  image?: string;
}

interface NavLinkType {
  label: string;
  href: string;
  icon?: string;
}

interface SocialLinkType {
  name: string;
  url: string;
  icon?: string;
}

interface Site {
  url: string;
  title: string;
  description: string;
  author: string;
  logo?: string;
  icon?: string;
  navigation?: NavLinkType[];
  social?: SocialLinkType[];
  openGraph?: OpenGraph;
  twitter?: Twitter;
}

export type { Site, NavLinkType, SocialLinkType };
