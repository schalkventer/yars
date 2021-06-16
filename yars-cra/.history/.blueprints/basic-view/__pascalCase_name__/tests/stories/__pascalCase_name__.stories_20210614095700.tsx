import React from "react";
import { Presentation } from "../../{{pascalCase name}}";
import * as mocks from "../mocks/{{pascalCase name}}.mocks";

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}",
  component: Presentation,
};

export const On = () => (
  <mocks.Provider>
    <Presentation {...mocks.STATE} actions={mocks.ACTIONS} value />
  </mocks.Provider>
);

export const Off = () => (
  <mocks.Provider>
    <Presentation {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </mocks.Provider>
);
