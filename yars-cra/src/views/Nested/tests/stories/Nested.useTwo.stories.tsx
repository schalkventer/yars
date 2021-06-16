import React from "react";
import Two from "../../components/Nested.Two";
import * as mocks from "../mocks/Nested.Two.mocks";
import useTwo from '../../hooks/Nested.useTwo'
import { Provider } from '../mocks/Nested.mocks'

export default {
  title: "views/Nested/Nested.useTwo",
  component: Two,
};

const WithHook = () => {
  const [state, actions] = useTwo();
  return <Two {...state} actions={actions} />
}

export const Default = () => <Provider><WithHook /></Provider>