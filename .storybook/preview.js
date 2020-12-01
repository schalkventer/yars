import React from "react"
import { addDecorator } from "@storybook/react"
import { Base } from "../src/components/Base"

const ORDER = [ "documentation-introduction", "documentation-project",  "documentation-components",  "documentation-views", "components", "views"]

const addBase = Story => (
  <Base>
    <Story />
  </Base>
)

addDecorator(addBase)

export const parameters = {
  showRoots: true,
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },

  storySort: (a, b) => {
    const aIndex = ORDER.findIndex(value => a[0].includes(value))
    const bIndex = ORDER.findIndex(value => b[0].includes(value))

    if (aIndex < bIndex) {
      return -1
    }

    if (aIndex > bIndex) {
      return 1
    }

    return 0
  },
}




// import React from 'react';
// import { create } from '@storybook/theming';
// import { addDecorator, addParameters } from '@storybook/react';
// import { Base } from '../src/ui/elements';



// const addDefaultStyles = Story => (
//   <Base>
//     <Story />
//   </Base>
// );
// addDecorator(addDefaultStyles);

// const theme = create({
//   base: 'light',
//   brandTitle: '🏡 HouseME Front-end UI',
// });

// addParameters({
//   options: {
//     theme,
//     showRoots: true,
//     storySort: (a, b) => {
//       const aIndex = ORDER.findIndex(value => a[0].includes(value));
//       const bIndex = ORDER.findIndex(value => b[0].includes(value));
//       if (aIndex < bIndex) {
//         return -1;
//       }
//       if (aIndex > bIndex) {
//         return 1;
//       }
//       return 0;
//     },
//   },
// });
