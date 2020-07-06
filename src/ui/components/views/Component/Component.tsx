import React, { FC } from 'react';
import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';

import { types, constants, useComponent } from '.';

const Button = styled(MuiButton)`
  background: red;
`;

/**
 * @name Presentation
 *
 * @description This is an internal functional version of the component that
 * render the UI without any internal state.
 */
export const Presentation: FC<types.State & { actions: types.Actions }> = (props) => {
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

/**
 * @name Stateful
 *
 * @description TODO Add description
 */
export const Stateful: FC<types.LoadedProps> = (props) => {
  const { placeholder, actions } = useComponent(props);

  return <Presentation placeholder={placeholder} actions={actions} />;
};

/**
 * @name
 *
 * @description TODO Add description
 */
export const Component: FC<types.Props> = (props) => {
  const { initialData, callbacks } = props;

  if (!initialData) {
    return <Button>Loading...</Button>;
  }

  return <Stateful initialData={initialData} callbacks={callbacks} />;
};

export default Component;
