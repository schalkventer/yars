import React from "react";
import Complex from "../../{{pascalCase name}}";
import * as mocks from "../mocks/{{pascalCase name}}.mocks";

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}",
  component: {{pascalCase name}},
};

export const Default = () => (
  <mocks.Provider>
    <Complex {...mocks.STATE} actions={mocks.ACTIONS} />
  </mocks.Provider>
);
