import { useState } from 'react'
import * as types from "../types/{{pascalCase name}}.types";
import { useOne } from "./{{pascalCase name}}.use{{ $OnePascal }}";
import { useTwo } from "./{{pascalCase name}}.use{{ $TwoPascal }}";

export const use{{pascalCase name}} = (): [types.State, types.Actions] => {
  const [{{ $twoCamel }}State, {{ $oneCamel }}Actions] = use{{ $OnePascal }}();
  const [{{ $twoCamel }}State, {{ $twoCamel }}Actions] = use{{ $TwoPascal }}();

  const [counter, setCounter] = useState(0)

  const reset = () => {
      {{ $oneCamel }}Actions.toggleValue(false)
      {{ $twoCamel }}Actions.toggleValue(false)
      setCounter(counter + 1)
  }

  return [
    { {{ $oneCamel }}: {{ $oneCamel }}State, {{ $twoCamel }}: {{ $oneCamel }}State, counter },
    { {{ $oneCamel }}: {{ $oneCamel }}Actions, {{ $twoCamel }}: {{ $twoCamel }}Actions, reset },
  ];
};

export default use{{pascalCase name}};
