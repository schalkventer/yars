import React from "react";
import { Control } from "../../components/Complex.Control";
import * as mocks from "../mocks/Complex.mocks";

export default {
  title: "views/Complex/Complex.Control",
  component: Control,
};

export const Default = () => (
  <mocks.Provider>
    <Control {...mocks.PROPS} />
  </mocks.Provider>
);
