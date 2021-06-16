import React from "react";
import { Basic } from "../../Basic";
import * as mocks from "../mocks/Basic.mocks";

export default {
  title: "views/Basic/Basic.useBasic",
  component: Basic,
};

const WithHook = () => {
  const [state, actions] = useBasic();
  return <Basic {...state} actions={actions} />
}

export const Default = () => <Provider><WithHook /></Provider>
