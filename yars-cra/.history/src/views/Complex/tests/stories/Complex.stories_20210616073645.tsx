import React from "react";
import Complex from "../../Complex";
import * as mocks from "../mocks/Complex.mocks";

export default {
  title: "views/Complex/Complex",
  component: Complex,
};

export const Default = () => (
  <mocks.Provider>
    <Complex {...mocks.STATE} actions={mocks.ACTIONS} />
  </mocks.Provider>
);
