import React from 'react';
import { Presentation } from '../../Example';
import * as mocks from '../mocks/Example.mocks'

export default {
    title: 'views/Example/Example',
    component: Presentation,
  }

export const On = () => <Presentation {...mocks.STATE} actions={mocks.ACTIONS} value />
export const Off = () => <Presentation {...mocks.STATE} actions={mocks.ACTIONS} value={false} />