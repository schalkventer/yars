import React from "react";
import Complex from "../../Complex";
import * as mocks from "../mocks/Complex.mocks";
import useComplex from '../../hooks/Complex.useComplex'

export default {
  title: "views/Complex/Complex.useComplex",
  component: Complex,
};

const WithHook = () => {
  const [state, actions] = useComplex();
  return <Complex {...state} actions={actions} />
}

export const Default = () => <mocks.Provider><WithHook /></mocks.Provider>
