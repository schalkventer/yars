import React, { FC } from "react";
import faker from "faker";
import { action } from "@storybook/addon-actions";
import context from '../../api/{{pascalCase name}}.context'
import * as types from "../../types/{{pascalCase name}}.types";
import * as {{ $oneCamel }}Mocks from './{{pascalCase name}}.{{ $OnePascal }}.mocks'
import * as {{ $twoCamel }}Mocks from './{{pascalCase name}}.{{ $TwoPascal }}.mocks'

export const STATE: types.State = {
  one: {{ $twoCamel }}Mocks.STATE,
  two: {{ $twoCamel }}Mocks.STATE,
  counter: faker.datatype.number(),
};

export const ACTIONS: types.Actions = {
  one: {{ $twoCamel }}Mocks.ACTIONS,
  two: {{ $twoCamel }}Mocks.ACTIONS,
  reset: action('reset')
};

export const PROPS: types.Props = {};

export const value: types.Api = {
  one: {
    readLocal: () => false,
    saveLocal: () => undefined,
  },
  two: {
    readLocal: () => false,
    saveLocal: () => undefined,
  }
}

export const Provider: FC = (props) => {
  const { children } = props;
  return <context.Provider value={value}>{children}</context.Provider>
}