import React from "react";
import { Complex } from "../../components.useControl";
import * as mocks from "../mocks/Complex.mocks";

export default {
  title: "views/Complex/Complex.useControl",
  component: Complex,
};

export const Default = () => (
  <mocks.Provider>
    <Complex {...mocks.PROPS} />
  </mocks.Provider>
);
