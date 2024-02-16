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
        }
    }
}