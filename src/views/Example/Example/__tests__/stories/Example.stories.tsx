import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Example } from '../../Example';
import * as types from '../../Example.types';

export default {
  title: 'views/Example/Example',
  component: Example,
}


const Template: Story<types.Props> = args => (
  <Example {...args}>Hello World</Example>
)

export const Default = Template.bind({});

Default.args = {
  value: 123,
};
