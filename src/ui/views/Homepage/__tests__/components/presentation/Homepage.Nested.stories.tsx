/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';

// import { fixtures } from '../..';
import { Nested } from '../../../components';

export default { title: 'views/Homepage/presentation/Homepage.Nested' };

const PROPS = {
  placeholder: false,
  actions: {
    approvePlaceholder: action('approvePlaceholder'),
  },
};

export const Default: FC = () => <Nested {...PROPS} />;
