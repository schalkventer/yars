import React from 'react';
import { Sorting } from '../Options.Presentation.Sorting';
import * as mocks from '../Options.mocks';

export default {
  title: 'views/Example/Options/Options.Sorting',
  component: Sorting,
}

export const Default = () => <Sorting {...mocks.SORTING} />
