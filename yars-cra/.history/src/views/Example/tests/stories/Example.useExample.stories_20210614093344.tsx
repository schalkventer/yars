import React from 'react';
import { Example } from '../../Example';
import * as mocks from '../mocks/Example.mocks'

export default {
    title: 'views/Example/Example.useExample',
    component: Example,
  }

export const Default = () => <  <mocks.Provider><Example {...mocks.PROPS} /></mocks.Provider>