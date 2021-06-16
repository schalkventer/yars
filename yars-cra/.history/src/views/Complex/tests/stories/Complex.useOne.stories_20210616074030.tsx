import React from "react";
import One from "../../components/Complex.One";
import * as mocks from "../mocks/Complex.One.mocks";
import useOne from '../../hooks/Complex.useOne'

export default {
  title: "views/Complex/Complex.useOne",
  component: One,
};

const WithHook = () => {
  const [state, actions] = useOne();

  return (
    <mocks.Provider>
      <One {...state} actions={actions} />
    </mocks.Provider>
  )
}

export const Default = () => <WithHook />