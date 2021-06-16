import React from "react";
import One from "../../components/Nested.One";
import * as mocks from "../mocks/Nested.One.mocks";
import useOne from '../../hooks/Nested.useOne'
import { Provider } from '../mocks/Nested.mocks'

export default {
  title: "views/Nested/Nested.useOne",
  component: One,
};

const WithHook = () => {
  const [state, actions] = useOne();
  return <One {...state} actions={actions} />
}

export const Default = () => <Provider><WithHook /></Provider>