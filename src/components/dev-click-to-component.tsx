
"use client";

import { ClickToComponent } from "click-to-react-component";

export default function DevClickToComponent({
  projectRoot,
}: {
  projectRoot?: string;
}) {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <ClickToComponent
      pathModifier={(path) => {
        // Next 16 returns paths such as `src/components/Button.tsx`.
        // VS Code requires an absolute path.
        if (!projectRoot || /^[a-zA-Z]:[\\/]/.test(path) || path.startsWith("/")) {
          return path;
        }

        return `${projectRoot.replace(/[\\/]$/, "")}/${path.replace(/^[\\/]+/, "")}`;
      }}
    />
  );
}