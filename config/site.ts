export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
  contacts: {
    email: string;
  };
};
export const siteConfig: SiteConfig = {
  name: "Exploding Insights",
  title: "Startup Ideas, Sent Weekly",
  description:
    "Join 11,000+ elite entrepreneurs getting curated startup ideas in million dollar niches. Launch your empire this weekend.",
  url: "",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/kodaneflash/shadnewcn",
  },
  contacts: {
    email: "hello@explodinginsights.com",
  },
};
