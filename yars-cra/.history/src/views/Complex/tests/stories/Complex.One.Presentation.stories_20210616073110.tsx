import React from "react";
import { Presentation } from "../../components/Complex.One";
import * as mocks from "../mocks/Complex.One.mocks";

export default {
  title: "views/Complex/Complex.Display.Presentation",
  component: Presentation,
};

export const Default = () => (
  <mocks.Provider>
    <Presentation {...mocks.PROPS} />
  </mocks.Provider>
);
