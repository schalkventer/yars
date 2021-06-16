import { addDecorator, the } from "@storybook/react";
import Base from "../src/components/Base";
import { MemoryRouter } from "react-router-dom";
import { create } from '@storybook/theming';

addDecorator((Story) => (
  <Base>
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  </Base>
));

const theme = create({
  base: 'light',
  brandTitle: 'YARS CRA',
});

export const parameters = {
  options: {
    theme,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
