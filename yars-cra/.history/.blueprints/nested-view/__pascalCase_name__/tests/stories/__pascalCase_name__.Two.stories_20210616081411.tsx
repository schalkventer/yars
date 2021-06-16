import React from "react";
import Two from "../../components/{{pascalCase name}}.Two";
import * as mocks from "../mocks/{{pascalCase name}}.Two.mocks";
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.Two",
  component: Two,
};

export const On = () => (
  <Provider>
    <Two {...mocks.STATE} actions={mocks.ACTIONS} value />
  </Provider>
);

export const Off = () => (
  <Provider>
    <Two {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </Provider>
);
