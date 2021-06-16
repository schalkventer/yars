import React, { FC } from "react";
import faker from "faker";
import { action } from "@storybook/addon-actions";
import context from '../../api/Complex.context'
import * as types from "../../types/Complex.types";
import { value as oneValue } from './Complex.One.mocks'
import { value as twoValue } from './Complex.Two.mocks'

export const STATE: types.State = {
  value: faker.datatype.boolean(),
};

export const ACTIONS: types.Actions = {
  toggleValue: action("setValue"),
};

export const PROPS: types.Props = {};


export const value: types.Api = {
    one: oneValue,
    two: twoValue,
}

export const Provider: FC = (props) => {
    const { children } = props;
    return <context.Provider value={value}>{children}</context.Provider>
}