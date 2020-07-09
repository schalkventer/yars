/**
 * Third-party modules
 */

import React from 'react';
import styled from 'styled-components';

/*
 * Internal module files
 */

import { Base } from '../..';

/*
 * Embedded components
 */

const Example = styled.div<{ height?: number }>`
  width: 5rem;
  height: ${({ height }): number => height || 5}rem;
  background: yellow;
  border: 1px solid blue;
`;

/**
 * Exported stories
 */

export default {
  title: '⚙️ Elements/Base/presentation/Base',
};

export const Default = (): JSX.Element => (
  <Base header={null} footer={null}>
    <Example>Content</Example>
  </Base>
);

export const Wrapped = (): JSX.Element => (
  <Base header={<Example>Header</Example>} footer={<Example>Footer</Example>}>
    <Example>Content</Example>
  </Base>
);

export const Overflow = (): JSX.Element => (
  <Base header={<Example>Header</Example>} footer={<Example>Footer</Example>}>
    <Example height={100}>Content</Example>
  </Base>
);
