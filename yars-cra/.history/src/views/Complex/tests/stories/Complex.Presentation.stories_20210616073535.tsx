import React from "react";
import Complex from "../../Complex";
import * as mocks from "../mocks/Complex.mocks";

export default {
  title: "views/Complex/Complex.Presentation",
  component: Complex,
};

export const On = () => (
  <mocks.Provider>
    <Complex {...mocks.STATE} actions={mocks.ACTIONS} value />
  </mocks.Provider>
);

export const Off = () => (
  <mocks.Provider>
    <Complex {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </mocks.Provider>
);
