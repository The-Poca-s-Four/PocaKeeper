// Tell TypeScript how to treat imported .jsx files in this mixed JS/TSX project.
// This makes `import Layout from './layout/Layout.jsx'` be treated as a
// React component type so props like `children` are allowed.
declare module "*.jsx" {
  import type * as React from "react";
  const Component: React.ComponentType<unknown>;
  export default Component;
}

// Also allow importing plain SVGs (already often present in Vite projects).
declare module "*.svg" {
  const src: string;
  export default src;
}
