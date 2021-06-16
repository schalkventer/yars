import React, { FC } from "react";
import faker from "faker";
import { action } from "@storybook/addon-actions";
import context from '../../api/Complex.context'
import * as types from "../../types/Complex.types";
import * as oneMocks from './Complex.One.mocks'
import * as twoMocks from './Complex.Two.mocks'

export const STATE: types.State = {
  one: oneMocks.STATE,
  two: twoMocks.STATE,
  counter: faker.datatype.number(),
};

export const ACTIONS: types.Actions = {
  one: oneMocks.ACTIONS,
  two: twoMocks.ACTIONS,
  reset: action('reset')
};

export const PROPS: types.Props = {};

export const value: types.Api = {
    one: twoMocks.value,
    two: twoMocks.value,
}

export const Provider: FC = (props) => {
    const { children } = props;
    return <context.Provider value={value}>{children}</context.Provider>
}