import React from "react";
import One from "../../components/{{pascalCase name}}.One";
import * as mocks from "../mocks/{{pascalCase name}}.One.mocks";
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.One",
  component: One,
};

export const On = () => (
  <Provider>
    <One {...mocks.STATE} actions={mocks.ACTIONS} value />
  </Provider>
);

export const Off = () => (
  <Provider>
    <One {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </Provider>
);
