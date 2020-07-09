/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';

import { mocks } from '../..';
import { Presentation } from '../../..';

export default { title: 'views/Homepage/presentation/Homepage' };

export const Default: FC = () => <Presentation {...mocks.STATE} actions={mocks.ACTIONS} />;
