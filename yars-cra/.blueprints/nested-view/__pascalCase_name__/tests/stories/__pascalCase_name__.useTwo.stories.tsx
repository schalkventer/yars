import React from "react";
import {{ $TwoPascal }} from "../../components/{{pascalCase name}}.{{ $TwoPascal }}";
import use{{ $TwoPascal }} from '../../hooks/{{pascalCase name}}.use{{ $TwoPascal }}'
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.use{{ $TwoPascal }}",
  component: {{ $TwoPascal }},
};

const WithHook = () => {
  const [state, actions] = use{{ $TwoPascal }}();
  return <{{ $TwoPascal }} {...state} actions={actions} />
}

export const Default = () => <Provider><WithHook /></Provider>