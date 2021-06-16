// / <reference types="node" />
// / <reference types="react" />
// / <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
  }
}

/* File type stubs */

declare module '*.md' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.gql' {
  const src: string;
  export default src;
}

declare module '*.txt' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.ttf' {
  const src: string;
  export default src;
}

declare module '*.woff' {
  const src: string;
  export default src;
}

/* Third-party stubs */

declare module 'markdown-it-attrs' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'markdown-it-footnote' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'markdown-it-ins' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'markdown-it-mark' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'markdown-it-sub' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'markdown-it-sup' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'markdown-it-sup' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'markdown-it-deflist' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'markdown-it-abbr' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'retext' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'markdown-it-anchor' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'retext-smartypants' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}

declare module 'trunc-html' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types: any;
  export default types;
}
