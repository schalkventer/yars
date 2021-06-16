import React from "react";
import Two from "../../components/Complex.Two";
import * as mocks from "../mocks/Complex.Two.mocks";

export default {
  title: "views/Complex/Complex.Two",
  component: Two,
};

export const One = () => (
  <mocks.Provider>
    <Two {...mocks.STATE} actions={mocks.ACTIONS} value />
  </mocks.Provider>
);

export const Off = () => (
  <mocks.Provider>
    <Two {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </mocks.Provider>
);
