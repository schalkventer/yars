/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';

import { mocks } from '../..';
import { Nested } from '../../../components';
import { useNested } from '../../../hooks';

export default { title: 'views/Homepage/stateful/Nested' };

export const Default: FC = () => {
  const props = useNested(mocks.PROPS);
  return <Nested {...props} />;
};
