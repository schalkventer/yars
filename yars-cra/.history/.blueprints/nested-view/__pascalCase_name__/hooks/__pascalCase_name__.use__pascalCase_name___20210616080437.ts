import { useState } from 'react'
import * as types from "../types/Complex.types";
import { useOne } from "./{{pascalCase name}}.use{{ $one }}";
import { useTwo } from "./{{pascalCase name}}.use{{ $two }}";

export const useComplex = (): [types.State, types.Actions] => {
  const [oneState, oneActions] = useOne();
  const [twoState, twoActions] = useTwo();

  const [counter, setCounter] = useState(0)

  const reset = () => {
      oneActions.toggleValue(false)
      twoActions.toggleValue(false)
      setCounter(counter + 1)
  }

  return [
    { one: oneState, two: twoState, counter },
    { one: oneActions, two: twoActions, reset },
  ];
};

export default useComplex;
