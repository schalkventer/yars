import React from "react";
import Two from "../../components/{{pascalCase name}}.Two";
import * as mocks from "../mocks/{{pascalCase name}}.Two.mocks";
import useTwo from '../../hooks/{{pascalCase name}}.useTwo'
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.useTwo",
  component: Two,
};

const WithHook = () => {
  const [state, actions] = useTwo();
  return <Two {...state} actions={actions} />
}

export const Default = () => <Provider><WithHook /></Provider>