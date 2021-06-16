import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { ToggleOff as OffIcon, ToggleOn as OnIcon } from "@material-ui/icons";

import useExample from "./hooks/Example.useExample";
import * as types from "./types/Example.types";
import { createMap } from './utilities/Example.helpers'

/* Constants */

const VALUE_MAP = createMap<boolean, {
  background: 'green' | 'red'
  text: 'On' | 'Off'
  icon: JSX.Element
}>([
  [
    true,
    {
      background: "green",
      text: "On",
      icon: <OffIcon />,
    },
  ],
  [
    false,
    {
      background: "red",
      text: "Off",
      icon: <OnIcon />,
    },
  ],
]);

/* Styled Components */

const Base = styled.div`
  padding: 1rem;
`;

const StyledButton = styled(Button)<{ background: 'green' | 'red' }>`
  background: ${({ value }) => getValueMap(value).background};
  color: white;
`;

/**
 * @name Presentation
 *
 * @description TODO Add description
 */
export const Presentation: FC<types.State & { actions: types.Actions }> = (
  props
) => {
  const { value, actions } = props;

  return (
    <Base>
      <StyledButton type="button" startIcon={getValueMap(value).icon} onClick={actions.toggleValue} value={value}>
        {getValueMap(value).text}
      </StyledButton>
    </Base>
  );
};

/**
 * @name Stateful
 *
 * @description TODO Add description
 */
export const Example: FC = () => {
  const [state, actions] = useExample();
  return <Presentation {...state} actions={actions} />;
};

export default Example