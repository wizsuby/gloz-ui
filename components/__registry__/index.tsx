// @ts-nocheck
import React from "react";

export const Index: Record<string, any> = {
    "default": {
        "text-stagger": {
          name: "text-stagger",
          type: "components:ui",
          registryDependencies: undefined,
          component: React.lazy(() => import("@/registry/animations/source/staggered-text-animation")),
          files: ["/registry/animations/source/staggered-text-animation.tsx"],
        },
        "text-stagger-demo": {
          name: "text-stagger-demo",
          type: "components:example",
          registryDependencies: undefined,
          component: React.lazy(() => import("@/registry/animations/demo/staggered-text-animation-demo")),
          files: ["/registry/animations/demo/staggered-text-animation-demo.tsx"],
        },
        "zoom-parallax": {
          name: "zoom-parallax",
          type: "components:ui",
          registryDependencies: undefined,
          component: React.lazy(() => import("@/registry/animations/source/zoom-paralax-animation")),
          files: ["/registry/animations/source/zoom-paralax-animation.tsx"],
        },
        "zoom-parallax-demo": {
          name: "zoom-parallax-demo",
          type: "components:example",
          registryDependencies: undefined,
          component: React.lazy(() => import("@/registry/animations/demo/zoom-paralax-animation-demo")),
          files: ["/app/examples/zoom-parallax/page.tsx"],
        },
    }
}