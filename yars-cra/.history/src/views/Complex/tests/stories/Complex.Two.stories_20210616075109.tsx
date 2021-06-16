import React from "react";
import Two from "../../components/Complex.Two";
import * as mocks from "../mocks/Complex.Two.mocks";
import { Provider } from '../mocks/Complex.mocks'

export default {
  title: "views/Complex/Complex.Two",
  component: Two,
};

export const On = () => (
  <Provider>
    <Two {...mocks.STATE} actions={mocks.ACTIONS} value />
  </Provider>
);

export const Off = () => (
  <Provider>
    <Two {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </Provider>
);
