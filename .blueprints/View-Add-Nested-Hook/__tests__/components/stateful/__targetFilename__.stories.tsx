/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';

import { mocks } from '../..';
import { {{ $targetComponentName }} } from '../../../components';
import { {{ $hook }} } from '../../../hooks';

export default { title: 'views/Homepage/stateful/{{ $targetComponentFilename }}' };

export const Default: FC = () => {
  const props = useNested(mocks.PROPS);
  return <{{ $targetComponentName }} {...props} />;
};
