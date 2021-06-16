import React from "react";
import Two from "../../components/Complex.Two";
import * as mocks from "../mocks/Complex.Two.mocks";
import useTwo from '../../hooks/Complex.useTwo'

export default {
  title: "views/Complex/Complex.useTwo",
  component: Two,
};

const WithHook = () => {
  const [state, actions] = useTwo();

  return (
    <mocks.Provider>
      <Two {...state} actions={actions} />
    </mocks.Provider>
  )
}

export const Default = () => <WithHook />