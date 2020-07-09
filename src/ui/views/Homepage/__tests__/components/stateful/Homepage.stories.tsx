/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';

import { mocks } from '../..';
import { Homepage } from '../../..';

export default { title: 'views/Homepage/stateful/Homepage' };

export const Default: FC = () => <Homepage {...mocks.PROPS} />;
