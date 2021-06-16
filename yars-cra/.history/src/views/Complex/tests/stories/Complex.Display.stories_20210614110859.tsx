import React from "react";
import { Display } from "../../components/Display";
import * as mocks from "../mocks/Display.mocks";

export default {
  title: "views/Complex/Complex.Display",
  component: Display,
};

export const Default = () => (
  <mocks.Provider>
    <Display {...mocks.PROPS} />
  </mocks.Provider>
);
