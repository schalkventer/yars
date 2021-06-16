import React from "react";
import { Presentation } from "../../components/Complex.Display";
import * as mocks from "../mocks/Complex.Display.mocks";

export default {
  title: "views/Complex/Complex.Display.Presentation",
  component: Presentation,
};

export const Default = () => (
  <mocks.Provider>
    <Display {...mocks.PROPS} />
  </mocks.Provider>
);
