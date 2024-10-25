import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/stagger-text",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        // {
        //   title: "Installation",
        //   href: "/docs/installation",
        //   items: [],
        // },

        // {
        //   title: "CLI",
        //   href: "/docs/cli",
        //   items: [],
        // },

        // {
        //   title: "Changelog",
        //   href: "/docs/changelog",
        //   items: [],
        // },
      ],
    },
    {
      title: "Animations",
      items: [
        {
          title: "Stagger Text",
          href: "/docs/components/stagger-text",
          items: [],
        },
        {
          title: "Zoom Parallax",
          href: "/docs/components/zoom-parallax",
          items: [],
        },
        
      ],
    },
  ],
};
