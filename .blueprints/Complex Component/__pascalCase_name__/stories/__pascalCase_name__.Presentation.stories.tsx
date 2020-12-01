import React from 'react';
import { Presentation } from '../{{pascalCase name}}.Presentation';
import * as mocks from '../{{pascalCase name}}.mocks';

export default {
  title: 'views/{{ $viewName }}/{{pascalCase name}}/{{pascalCase name}}.Presentation',
  component: Presentation,
}

export const Default = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} />
export const Loading = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} phase="loading" />
export const Error = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} phase="error" />
