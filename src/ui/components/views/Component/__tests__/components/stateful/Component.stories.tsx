/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';

import { fixtures } from '../..';
import { Component } from '../../..';

export default { title: '📺 View Components/Component/stateful/Component' };

export const Default: FC = () => <Component {...fixtures.PROPS} />;
