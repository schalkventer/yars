import React from 'react';
import { Filters } from '../Options.Presentation.Filters';
import * as mocks from '../Options.mocks';

export default {
  title: 'views/Example/Options/Options.Filtering',
  component: Filters,
}

export const Default = () => <Filters {...mocks.FILTERS} />
