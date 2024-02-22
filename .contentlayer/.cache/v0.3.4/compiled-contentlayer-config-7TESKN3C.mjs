// contentlayer.config.js
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// lib/rehype-component.ts
import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// components/__registry__/index.tsx
import React from "react";
var Index = {
  "default": {
    "text-stagger": {
      name: "text-stagger",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/animations/source/staggered-text-animation")),
      files: ["/registry/animations/source/staggered-text-animation.tsx"]
    },
    "text-stagger-demo": {
      name: "text-stagger-demo",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/animations/demo/staggered-text-animation-demo")),
      files: ["/registry/animations/demo/staggered-text-animation-demo.tsx"]
    },
    "zoom-parallax": {
      name: "zoom-parallax",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/animations/source/zoom-paralax-animation")),
      files: ["/registry/animations/source/zoom-paralax-animation.tsx"]
    },
    "zoom-parallax-demo": {
      name: "zoom-parallax-demo",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/animations/demo/zoom-paralax-animation-demo")),
      files: ["/app/examples/zoom-parallax/page.tsx"]
    }
  }
};

// lib/rehype-component.ts
function rehypeComponent() {
  return async (tree) => {
    visit(tree, (node) => {
      const { value: srcPath } = getNodeAttributeByName(node, "src") || {};
      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value;
        const fileName = getNodeAttributeByName(node, "fileName")?.value;
        if (!name && !srcPath) {
          return null;
        }
        try {
          let src;
          if (srcPath) {
            src = srcPath;
          } else {
            const component = Index["default"][name];
            src = fileName ? component.files.find((file) => {
              return file.endsWith(`${fileName}.tsx`) || file.endsWith(`${fileName}.ts`);
            }) || component.files[0] : component.files[0];
          }
          const filePath = path.join(process.cwd(), src);
          let source = fs.readFileSync(filePath, "utf8");
          source = source.replaceAll(
            `@/registry/${"default"}/`,
            "@/components/"
          );
          source = source.replaceAll("export default", "export");
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src,
                __style__: "default"
              },
              attributes: [
                {
                  name: "styleName",
                  type: "mdxJsxAttribute",
                  value: "default"
                }
              ],
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      value: source
                    }
                  ]
                })
              ]
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value;
        if (!name) {
          return null;
        }
        try {
          const component = Index["default"][name];
          const src = component.files[0];
          const filePath = path.join(process.cwd(), src);
          let source = fs.readFileSync(filePath, "utf8");
          source = source.replaceAll(
            `@/registry/${"default"}/`,
            "@/components/"
          );
          source = source.replaceAll("export default", "export");
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      value: source
                    }
                  ]
                })
              ]
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

// contentlayer.config.js
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: {
      type: "string"
    },
    api: {
      type: "string"
    }
  }
}));
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    links: {
      type: "nested",
      of: LinksProperties,
      required: false
    },
    featured: {
      type: "boolean",
      default: false,
      required: false
    },
    component: {
      type: "boolean",
      default: false,
      required: false
    },
    toc: {
      type: "boolean",
      default: true,
      required: false
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7TESKN3C.mjs.map
