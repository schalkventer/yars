import React from "react";
import One from "../../components/Complex.One";
import * as mocks from "../mocks/Complex.One.mocks";

export default {
  title: "views/Complex/Complex.Display.Presentation",
  component: One,
};

export const Default = () => (
  <mocks.Provider>
    <One {...mocks.PROPS} />
  </mocks.Provider>
);
