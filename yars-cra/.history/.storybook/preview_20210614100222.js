import { addDecorator } from '@storybook/react'
import Base from '../src/components/Base'
import { MemoryRouter } from 'react-router-dom'

addDecorator(Story => <Base><MemoryRouter><Story /></MemoryRouter></Base>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}