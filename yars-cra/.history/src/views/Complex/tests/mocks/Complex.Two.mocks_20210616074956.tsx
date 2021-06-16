import React, { FC } from "react";
import faker from "faker";
import { action } from "@storybook/addon-actions";
import context from '../../api/Complex.context'
import * as types from "../../types/Complex.Two.types";
import * as mocks from './Complex.mocks'

export const STATE: types.State = {
  value: faker.datatype.boolean(),
};

export const ACTIONS: types.Actions = {
  toggleValue: action("setValue"),
};

export const PROPS: types.Props = {};
