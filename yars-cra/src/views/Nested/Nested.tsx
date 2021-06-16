import React, { FC } from "react";
import styled from "styled-components";
import * as types from "./types/Nested.types";
import { One } from './components/Nested.One'
import { Two } from './components/Nested.Two'

/* Styled Components */

const Base = styled.div`
  padding: 1rem;
`;

/**
 * @name Complex
 *
 * @description TODO Add description
 */
export const Nested: FC<types.State & { actions: types.Actions }> = (
  props
) => {
  const { one, two, counter, actions } = props;
  const handleReset = () => actions.reset();

  return (
    <Base>
      <One {...one actions={actions.one />
      <Two {...two actions={actions.two />

      <div>
        <button onClick={handleReset}>Reset</button>
        {counter}
      </div>
    </Base>
  );
};

export default Nested;
