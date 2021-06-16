import React from "react";
import { Presentation } from "../../Example";
import * as mocks from "../mocks/Example.mocks";

export default {
  title: "views/Example/Example",
  component: Presentation,
};

export const On = () => (
  <mocks.Provider>
    <Presentation {...mocks.STATE} actions={mocks.ACTIONS} value />
  </mocks.Provider>
);

export const Off = () => (
  <mocks.Provider>
    <Presentation {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </mocks.Provider>
);
