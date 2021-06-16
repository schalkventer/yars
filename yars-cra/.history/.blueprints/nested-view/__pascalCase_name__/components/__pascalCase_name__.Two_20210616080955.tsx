import React, { FC } from "react";
import styled from "styled-components";
import { darken } from 'polished'
import { Button } from "@material-ui/core";
import { ToggleOff as OffIcon, ToggleOn as OnIcon } from "@material-ui/icons";

import * as types from "../types/{{pascalCase name}}.{{ $two }}.types";
import { createMap } from "../utilities/{{pascalCase name}}.helpers";

/* Constants */

const COLORS_MAP = {
  green: '#1B998B',
  red: '#F15152'
}

const VALUE_MAP = createMap<
  boolean,
  {
    background: "green" | "red";
    text: "On" | "Off";
    icon: JSX.Element;
  }
>([
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

const StyledButton = styled(Button)<{ background: "green" | "red" }>`
  background: ${({ background }) => COLORS_MAP[background]};
  color: white;

  &:hover {
    background: ${({ background }) => darken(0.1, COLORS_MAP[background])};
  }
`;

/**
 * @name {{ $two }}
 *
 * @description TODO Add description
 */
export const {{ $two }}: FC<types.State & { actions: types.Actions }> = (
  props
) => {
  const { value, actions } = props;
  const handleClick = () => actions.toggleValue();

  return (
    <Base>
      <StyledButton
        type="button"
        startIcon={VALUE_MAP.get(value).icon}
        onClick={handleClick}
        background={VALUE_MAP.get(value).background}
      >
        {VALUE_MAP.get(value).text}
      </StyledButton>
    </Base>
  );
};

export default {{ $twoPascal }};
