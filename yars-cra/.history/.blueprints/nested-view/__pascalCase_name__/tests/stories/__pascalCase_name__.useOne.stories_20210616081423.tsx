import React from "react";
import One from "../../components/{{pascalCase name}}.One";
import * as mocks from "../mocks/{{pascalCase name}}.One.mocks";
import useOne from '../../hooks/{{pascalCase name}}.useOne'
import { Provider } from '../mocks/{{pascalCase name}}.mocks'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.useOne",
  component: One,
};

const WithHook = () => {
  const [state, actions] = useOne();
  return <One {...state} actions={actions} />
}

export const Default = () => <Provider><WithHook /></Provider>