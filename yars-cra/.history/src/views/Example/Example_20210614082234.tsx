import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { ToggleOff as OffIcon, ToggleOn as OnIcon } from "@material-ui/icons";

import useExample from "./hooks/Example.useExample";
import * as types from "./types/Example.types";

/* Constants */

const VALUE_MAP: Map<boolean, types.ValueMap> = new Map([
  [
    true,
    {
      color: "green",
      text: "On",
      icon: <OffIcon />,
    },
  ],
  [
    false,
    {
      color: "red",
      text: "Off",
      icon: <OnIcon />,
    },
  ],
]);

const yo = VALUE_MAP.get(true)

/* Styled Components */

const Base = styled.div`
  padding: 1rem;
`;

const StyledButton = styled(Button)<{ value: boolean }>`
  background: ${({ value }) => (VALUE_MAP.get(value) as types.ValueMap).color};
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
  const handleClick = (event) => actions.setValue(event.target.value)

  return (
    <Base>
      <StyledButton startIcon={VALUE_MAP.get(value).icon} onClick={handleClick}>
        {VALUE_MAP.get(value).text}
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