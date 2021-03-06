import faker from "faker";
import { action } from "@storybook/addon-actions";
import * as types from "../../types/{{pascalCase name}}.{{ $OnePascal }}.types";

export const STATE: types.State = {
  value: faker.datatype.boolean(),
};

export const ACTIONS: types.Actions = {
  toggleValue: action("setValue"),
};

export const PROPS: types.Props = {};
