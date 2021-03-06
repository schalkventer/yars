import React from "react";
import { {{pascalCase name}} } from "../../{{pascalCase name}}";
import * as mocks from "../mocks/{{pascalCase name}}.mocks";

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.use{{pascalCase name}}",
  component: {{pascalCase name}},
};

export const Default = () => (
  <mocks.Provider>
    <{{pascalCase name}} {...mocks.PROPS} />
  </mocks.Provider>
);
