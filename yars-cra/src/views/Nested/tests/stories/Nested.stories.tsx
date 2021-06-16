import React from "react";
import Complex from "../../Nested";
import * as mocks from "../mocks/Nested.mocks";

export default {
  title: "views/Nested/Nested",
  component: Nested,
};

export const Default = () => (
  <mocks.Provider>
    <Complex {...mocks.STATE} actions={mocks.ACTIONS} />
  </mocks.Provider>
);
