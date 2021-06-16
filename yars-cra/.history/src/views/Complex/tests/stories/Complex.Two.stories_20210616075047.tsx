import React from "react";
import Two from "../../components/Complex.Two";
import * as mocks from "../mocks/Complex.Two.mocks";
import * as complexMocks from '../mocks/Complex.Two.mocks'

export default {
  title: "views/Complex/Complex.Two",
  component: Two,
};

export const On = () => (
  <complexMocks.Provider>
    <Two {...mocks.STATE} actions={mocks.ACTIONS} value />
  </complexMocks.Provider>
);

export const Off = () => (
  <complexMocks.Provider>
    <Two {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </complexMocks.Provider>
);
