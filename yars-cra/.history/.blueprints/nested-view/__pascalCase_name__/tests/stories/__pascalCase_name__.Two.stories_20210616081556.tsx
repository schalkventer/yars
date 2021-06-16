import React from "react";
import Two from "../../components/{{pascalCase name}}.{{ $twoPascal }}";
import * as mocks from "../mocks/{{pascalCase name}}.{{ $twoPascal }}.mocks";
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.{{ $twoPascal }}",
  component: {{ $twoPascal }},
};

export const On = () => (
  <Provider>
    <{{ $twoPascal }} {...mocks.STATE} actions={mocks.ACTIONS} value />
  </Provider>
);

export const Off = () => (
  <Provider>
    <{{ $twoPascal }} {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </Provider>
);
