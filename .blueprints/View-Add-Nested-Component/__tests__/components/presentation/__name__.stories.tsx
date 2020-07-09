/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';

// import { fixtures } from '../..';
import { {{ $component }} } from '../../../components';

export default { title: 'views/{{ $view }}/presentation/{{name}}' };

const PROPS = {
    placeholder: false,
    actions: {
      approvePlaceholder: action('approvePlaceholder'),
    },
  };
  
  export const Default: FC = () => <{{ $component }} {...PROPS} />;
  
  