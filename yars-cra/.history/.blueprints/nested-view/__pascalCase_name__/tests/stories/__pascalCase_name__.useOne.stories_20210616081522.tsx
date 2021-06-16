import React from "react";
import {{ $onePascal }} from "../../components/{{pascalCase name}}.{{ $onePascal }}";
import * as mocks from "../mocks/{{pascalCase name}}.{{ $onePascal }}.mocks";
import use{{ $onePascal }} from '../../hooks/{{pascalCase name}}.use{{ $onePascal }}'
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.use{{ $onePascal }}",
  component: {{ $onePascal }},
};

const WithHook = () => {
  const [state, actions] = use{{ $onePascal }}();
  return <{{ $onePascal }} {...state} actions={actions} />
}

export const Default = () => <Provider><WithHook /></Provider>