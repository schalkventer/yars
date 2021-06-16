import { useState } from 'react'
import * as types from "../types/Nested.types";
import { useOne } from "./Nested.useOne";
import { useTwo } from "./Nested.useTwo";

export const useNested = (): [types.State, types.Actions] => {
  const [twoState, oneActions] = useOne();
  const [twoState, twoActions] = useTwo();

  const [counter, setCounter] = useState(0)

  const reset = () => {
      oneActions.toggleValue(false)
      twoActions.toggleValue(false)
      setCounter(counter + 1)
  }

  return [
    { one: oneState, two: oneState, counter },
    { one: oneActions, two: twoActions, reset },
  ];
};

export default useNested;
