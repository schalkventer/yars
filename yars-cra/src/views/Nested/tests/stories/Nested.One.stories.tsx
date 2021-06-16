import React from "react";
import One from "../../components/Nested.One";
import * as mocks from "../mocks/Nested.One.mocks";
import { Provider } from '../mocks/Nested.mocks'

export default {
  title: "views/Nested/Nested.One",
  component: One,
};

export const On = () => (
  <Provider>
    <One {...mocks.STATE} actions={mocks.ACTIONS} value />
  </Provider>
);

export const Off = () => (
  <Provider>
    <One {...mocks.STATE} actions={mocks.ACTIONS} value={false} />
  </Provider>
);
