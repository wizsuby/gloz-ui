// @ts-nocheck
import React from "react";

export const Index: Record<string, any> = {
    "default": {
        "accordion": {
          name: "accordion",
          type: "components:ui",
          registryDependencies: undefined,
          component: React.lazy(() => import("@/components/ui/accordion")),
          files: ["components/ui/accordion.tsx"],
        },
        "accordion-demo": {
          name: "accordion-demo",
          type: "components:example",
          registryDependencies: ["accordion"],
          component: React.lazy(() => import("@/registry/default/example/accordion-demo")),
          files: ["registry/default/example/accordion-demo.tsx"],
        },
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
    }
}