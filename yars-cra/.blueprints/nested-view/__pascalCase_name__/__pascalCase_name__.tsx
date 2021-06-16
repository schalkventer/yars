import React, { FC } from "react";
import styled from "styled-components";
import * as types from "./types/{{pascalCase name}}.types";
import { One } from './components/{{pascalCase name}}.{{ $OnePascal }}'
import { Two } from './components/{{pascalCase name}}.{{ $TwoPascal }}'

/* Styled Components */

const Base = styled.div`
  padding: 1rem;
`;

/**
 * @name Complex
 *
 * @description TODO Add description
 */
export const {{pascalCase name}}: FC<types.State & { actions: types.Actions }> = (
  props
) => {
  const { {{ $oneCamel }}, {{ $twoCamel }}, counter, actions } = props;
  const handleReset = () => actions.reset();

  return (
    <Base>
      <One { ...{{ $oneCamel }} } actions={actions.{{ $oneCamel }} } />
      <Two { ...{{ $twoCamel }} } actions={actions.{{ $twoCamel }} } />

      <div>
        <button onClick={handleReset}>Reset</button>
        {counter}
      </div>
    </Base>
  );
};

export default {{pascalCase name}};
