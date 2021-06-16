import React from "react";
import One from "../../components/Complex.Two";
import * as mocks from "../mocks/Complex.Two.mocks";
import useTwo from '../../hooks/Complex.useTwo'

export default {
  title: "views/Complex/Complex.Two",
  component: One,
};

export const Default = () => {
  const [state, actions] = useTwo();

  return (
    <mocks.Provider>
    <One {...state} actions={actions} />
  </mocks.Provider>
  )
};
