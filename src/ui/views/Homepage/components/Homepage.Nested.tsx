import React, { FC } from 'react';
import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';

import { types, constants } from '..';

const Button = styled(MuiButton)`
  background: red;
`;

/**
 * @name Props
 *
 * @description TODO Add description
 */
interface Props {
  /**
   * See type for more information
   */
  actions: types.Actions;

  /**
   * TODO Add description
   */
  placeholder: boolean;
}

/**
 * @name Nested
 *
 * @description TODO add description
 */
export const Nested: FC<Props> = (props) => {
  const { placeholder, actions } = props;

  return (
    <>
      <h1>{constants.HEADING.starting}</h1>

      <Button disabled={placeholder} onClick={actions.approvePlaceholder}>
        Click me!
      </Button>
    </>
  );
};

export default Nested;
