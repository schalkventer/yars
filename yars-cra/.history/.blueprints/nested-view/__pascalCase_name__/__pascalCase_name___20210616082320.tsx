import React, { FC } from "react";
import styled from "styled-components";
import * as types from "./types/Complex.types";
import { One } from './components/Complex.{{ $onePascal }}'
import { Two } from './components/Complex.{{ $twoPascal }}'

/* Styled Components */

const Base = styled.div`
  padding: 1rem;
`;

/**
 * @name Complex
 *
 * @description TODO Add description
 */
export const Complex: FC<types.State & { actions: types.Actions }> = (
  props
) => {
  const { {{ $oneCamel }}, {{ $twoCamel }}, counter, actions } = props;
  const handleReset = () => actions.reset();

  return (
    <Base>
      <One {...{{ $oneCamel }}} actions={actions.one} />
      <Two {...{{ $twoCamel }}} actions={actions.two} />

      <div>
        <button onClick={handleReset}>Reset</button>
        {counter}
      </div>
    </Base>
  );
};

export default Complex;
