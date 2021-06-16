import React from "react";
import { {{pascalCase name}} } from "../../{{pascalCase name}}";
import * as mocks from "../mocks/{{pascalCase name}}.mocks";

export default {
  title: "views/{{pascalCase name}}/{{pascalCase name}}.use{{pascalCase name}}",
  component: {{pascalCase name}},
};


const WithHook = () => {
  const [state, actions] = use{{pascalCase name}}();
  return <{{pascalCase name}} {...state} actions={actions} />
}

export const Default = () => <Provider><WithHook /></Provider>
