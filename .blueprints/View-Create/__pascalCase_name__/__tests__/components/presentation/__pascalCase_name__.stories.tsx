/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';

import { mocks } from '../..';
import { Presentation } from '../../..';

export default { title: 'views/{{pascalCase name}}/presentation/{{pascalCase name}}' };

export const Default: FC = () => <Presentation {...fixtures.STATE} actions={fixtures.ACTIONS} />;
