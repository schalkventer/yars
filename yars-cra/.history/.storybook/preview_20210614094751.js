import { addDecorator } from '@storybook/react'
import Base from '../src/components/Base'

addDecorator(Story => <Base><Story /></Base>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}