import React from "react";
import { Presentation } from "../../components/Complex.Two";
import * as mocks from "../mocks/Complex.Two.mocks";

export default {
  title: "views/Complex/Complex.Control.Presentation",
  component: Presentation,
};

export const Default = () => (
  <mocks.Provider>
    <Presentation {...mocks.PROPS} />
  </mocks.Provider>
);
