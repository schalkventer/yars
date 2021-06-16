import React from "react";
import Complex from "../../{{pascalCase name}}";
import * as mocks from "../mocks/{{pascalCase name}}.mocks";
import useComplex from '../../hooks/{{pascalCase name}}.useComplex'

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.use{{pascalCase name}}",
  component: Complex,
};

const WithHook = () => {
  const [state, actions] = useComplex();
  return <Complex {...state} actions={actions} />
}

export const Default = () => <mocks.Provider><WithHook /></mocks.Provider>
