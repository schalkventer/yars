import React from "react";
import Two from "../../components/Complex.Two";
import * as mocks from "../mocks/Complex.Two.mocks";

export default {
  title: "views/Complex/Complex.Display.Presentation",
  component: Two,
};

export const Default = () => (
  <mocks.Provider>
    <Two {...mocks.STATE} actions={mocks.ACTIONS} />
  </mocks.Provider>
);
