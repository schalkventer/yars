import React from 'react';
import { Example } from '../../Example';
import * as mocks from '../mocks/Example.mocks.ts'

export default {
    title: 'views/Example/Example.useExample',
    component: Example,
  }

export const Default = () => <Example {...mocks.PROPS} />