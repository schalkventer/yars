import React from "react";
import {{ $OnePascal }} from "../../components/{{pascalCase name}}.{{ $OnePascal }}";
import * as mocks from "../mocks/{{pascalCase name}}.{{ $OnePascal }}.mocks";
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.{{ $OnePascal }}",
  component: {{ $OnePascal }},
};

export const On = () => (
  <Provider>
    <{{ $OnePascal }} {...mocks.STATE} actions={mocks.ACTIONS} value />
  </Provider>
);

export const Off = () => (
  <Provider>
    <{{ $OnePascal }} {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </Provider>
);
