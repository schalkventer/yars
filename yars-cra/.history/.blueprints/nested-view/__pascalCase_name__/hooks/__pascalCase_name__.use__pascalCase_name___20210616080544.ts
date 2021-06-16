import { useState } from 'react'
import * as types from "../types/{{pascalCase name}}.types";
import { useOne } from "./{{pascalCase name}}.use{{ $one }}";
import { useTwo } from "./{{pascalCase name}}.use{{ $two }}";

export const use{{pascalCase name}} = (): [types.State, types.Actions] => {
  const [{{ $two }}State, {{ $one }}Actions] = use{{ $one }}();
  const [{{ $two }}State, {{ $two }}Actions] = use{{ $two }}();

  const [counter, setCounter] = useState(0)

  const reset = () => {
      {{ $one }}Actions.toggleValue(false)
      {{ $two }}Actions.toggleValue(false)
      setCounter(counter + 1)
  }

  return [
    { one: oneState, two: twoState, counter },
    { one: oneActions, two: twoActions, reset },
  ];
};

export default useComplex;
