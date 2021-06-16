import React from "react";
import { Example } from "../../{{pascalCase name}}";
import * as mocks from "../mocks/{{pascalCase name}}.mocks";

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.use{{pascalCase name}}",
  component: Example,
};

export const Default = () => (
  <mocks.Provider>
    <Example {...mocks.PROPS} />
  </mocks.Provider>
);
