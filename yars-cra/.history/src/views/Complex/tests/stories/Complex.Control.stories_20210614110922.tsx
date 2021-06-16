import React from "react";
import { Display } from "../../components/Complex.Control";
import * as mocks from "../mocks/Complex.Control.mocks";

export default {
  title: "views/Complex/Complex.Display",
  component: Display,
};

export const Default = () => (
  <mocks.Provider>
    <Display {...mocks.PROPS} />
  </mocks.Provider>
);
