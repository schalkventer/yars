import React from "react";
import Two from "../../components/Nested.Two";
import * as mocks from "../mocks/Nested.Two.mocks";
import { Provider } from '../mocks/Nested.mocks'

export default {
  title: "views/Nested/Nested.Two",
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
