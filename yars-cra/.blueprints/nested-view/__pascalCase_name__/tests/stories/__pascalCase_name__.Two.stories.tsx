import React from "react";
import {{ $TwoPascal }} from "../../components/{{pascalCase name}}.{{ $TwoPascal }}";
import * as mocks from "../mocks/{{pascalCase name}}.{{ $TwoPascal }}.mocks";
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.{{ $TwoPascal }}",
  component: {{ $TwoPascal }},
};

export const On = () => (
  <Provider>
    <{{ $TwoPascal }} {...mocks.STATE} actions={mocks.ACTIONS} value />
  </Provider>
);

export const Off = () => (
  <Provider>
    <{{ $TwoPascal }} {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </Provider>
);
