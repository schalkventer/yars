import React from "react";
import One from "../../components/Complex.One";
import * as mocks from "../mocks/Complex.One.mocks";
import { Provider } from '../mocks/Complex.mocks'

export default {
  title: "views/Complex/Complex.One",
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
