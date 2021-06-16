import React, { FC } from "react";
import styled from "styled-components";
import { darken } from 'polished'
import { Button } from "@material-ui/core";
import { ToggleOff as OffIcon, ToggleOn as OnIcon } from "@material-ui/icons";
import * as types from "./types/Complex.types";
import { createMap } from "./utilities/Complex.helpers";
import { One } from './components/Complex.One'
import { Two } from './components/Complex.Two'

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
 * @name Complex
 *
 * @description TODO Add description
 */
export const Complex: FC<types.State & { actions: types.Actions }> = (
  props
) => {
  const { one, two, counter, actions } = props;
  const handleReset = () => actions.reset();

  return (
    <Base>
      <One {...one} actions={actions.one} />
      <Two {...two} actions={actions.two} />

      <div>
        <button onClick={handleReset}>Reset</button>
        {counter}
      </div>
    </Base>
  );
};

export default Complex;
