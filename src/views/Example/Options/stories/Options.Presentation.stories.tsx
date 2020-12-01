import React from 'react';
import { Presentation } from '../Options.Presentation';
import * as mocks from '../Options.mocks';

export default {
  title: 'views/Example/Options/Options.Presentation',
  component: Presentation,
}

export const Default = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} />
export const NoExport = () =>  <Presentation {...mocks.STATE} actions={{ ...mocks.ACTIONS, exportData: null }} />
export const FilteringPhase = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} phase="filtering" />
export const SortingPhase = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} phase="sorting" />
export const Loading = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} isLoading/>
