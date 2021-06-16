import React from "react";
import Basic from "../../Basic";
import * as mocks from "../mocks/Basic.mocks";

export default {
  title: "views/Basic/Basic",
  component: Basic,
};

export const On = () => (
  <mocks.Provider>
    <Basic {...mocks.STATE} actions={mocks.ACTIONS} value />
  </mocks.Provider>
);

export const Off = () => (
  <mocks.Provider>
    <Basic {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </mocks.Provider>
);
