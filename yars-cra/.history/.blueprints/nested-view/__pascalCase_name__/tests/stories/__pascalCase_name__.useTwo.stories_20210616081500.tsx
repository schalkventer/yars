import React from "react";
import {{ $twoPascal }} from "../../components/{{pascalCase name}}.{{ $twoPascal }}";
import * as mocks from "../mocks/{{pascalCase name}}.{{ $twoPascal }}.mocks";
import use{{ $twoPascal }} from '../../hooks/{{pascalCase name}}.use{{ $twoPascal }}'
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.use{{ $twoPascal }}",
  component: {{ $twoPascal }},
};

const WithHook = () => {
  const [state, actions] = use{{ $twoPascal }}();
  return <{{ $twoPascal }} {...state} actions={actions} />
}

export const Default = () => <Provider><WithHook /></Provider>