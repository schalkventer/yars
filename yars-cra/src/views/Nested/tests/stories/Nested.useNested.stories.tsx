import React from "react";
import Complex from "../../Nested";
import * as mocks from "../mocks/Nested.mocks";
import useComplex from '../../hooks/Nested.useComplex'

export default {
  title: "views/Nested/Nested.useNested",
  component: Complex,
};

const WithHook = () => {
  const [state, actions] = useComplex();
  return <Complex {...state} actions={actions} />
}

export const Default = () => <mocks.Provider><WithHook /></mocks.Provider>
