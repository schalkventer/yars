import React from 'react';
import { Presentation } from '../../Example';
import * as mocks from '../mocks/Example.mocks'

export default {
    title: 'views/Example/Example',
    component: Presentation,
  }

export const Default = () => <Presentation {...mocks.STATE} actions={mocks.ACTIONS} />