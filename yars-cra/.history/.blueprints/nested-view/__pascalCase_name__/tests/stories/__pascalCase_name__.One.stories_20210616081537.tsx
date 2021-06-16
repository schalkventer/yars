import React from "react";
import {{ $onePascal }} from "../../components/{{pascalCase name}}.{{ $onePascal }}";
import * as mocks from "../mocks/{{pascalCase name}}.{{ $onePascal }}.mocks";
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.{{ $onePascal }}",
  component: {{ $onePascal }},
};

export const On = () => (
  <Provider>
    <{{ $onePascal }} {...mocks.STATE} actions={mocks.ACTIONS} value />
  </Provider>
);

export const Off = () => (
  <Provider>
    <{{ $onePascal }} {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </Provider>
);
