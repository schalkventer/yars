import faker from "faker";
import fakerE from "faker-extra";
import { action } from "@storybook/addon-actions";

import * as types from "../../types/Example.types";

export const STATE: types.State = {
  value: fakerE.frequency(90) ? true : false,
};

export const ACTIONS: types.Actions = {
  toggleValue: action("toggleValue"),
};

export const PROPS: types.Props = {};
