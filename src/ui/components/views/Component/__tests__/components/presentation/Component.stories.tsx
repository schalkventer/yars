/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';

import { fixtures } from '../..';
import { Presentation } from '../../..';

export default { title: '📺 View Components/Component/presentation/Component' };

export const Default: FC = () => <Presentation {...fixtures.STATE} actions={fixtures.ACTIONS} />;
