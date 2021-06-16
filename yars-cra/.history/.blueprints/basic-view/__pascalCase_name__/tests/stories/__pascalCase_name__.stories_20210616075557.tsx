import React from "react";
import {{pascalCase name}} from "../../{{pascalCase name}}";
import * as mocks from "../mocks/{{pascalCase name}}.mocks";

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}",
  component: {{pascalCase name}},
};

export const On = () => (
  <mocks.Provider>
    <{{pascalCase name}} {...mocks.STATE} actions={mocks.ACTIONS} value />
  </mocks.Provider>
);

export const Off = () => (
  <mocks.Provider>
    <{{pascalCase name}} {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </mocks.Provider>
);
