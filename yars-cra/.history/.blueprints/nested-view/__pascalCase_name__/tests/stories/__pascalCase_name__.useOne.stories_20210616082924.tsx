import React from "react";
import {{ $OnePascal }} from "../../components/{{pascalCase name}}.{{ $OnePascal }}";
import * as mocks from "../mocks/{{pascalCase name}}.{{ $OnePascal }}.mocks";
import use{{ $OnePascal }} from '../../hooks/{{pascalCase name}}.use{{ $OnePascal }}'
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.use{{ $OnePascal }}",
  component: {{ $OnePascal }},
};

const WithHook = () => {
  const [state, actions] = use{{ $OnePascal }}();
  return <{{ $OnePascal }} {...state} actions={actions} />
}

export const Default = () => <Provider><WithHook /></Provider>