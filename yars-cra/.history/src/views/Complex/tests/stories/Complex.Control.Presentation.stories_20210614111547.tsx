import React from "react";
import { Presentation } from "../../components/Complex.Control";
import * as mocks from "../mocks/Complex.Control.mocks";

export default {
  title: "views/Complex/Complex.Control.Presentation",
  component: Presentation,
};

export const Default = () => (
  <mocks.Provider>
    <Display {...mocks.PROPS} />
  </mocks.Provider>
);
