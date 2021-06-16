import React from "react";
import One from "../../components/Complex.One";
import * as mocks from "../mocks/Complex.One.mocks";

export default {
  title: "views/Complex/Complex.One",
  component: One,
};

export const On = () => (
  <mocks.Provider>
    <One {...mocks.STATE} actions={mocks.ACTIONS} value />
  </mocks.Provider>
);

export const Off = () => (
  <mocks.Provider>
    <One {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </mocks.Provider>
);
