import { createContext, Context } from "react";
import * as types from "../types/Complex.types";

const oneKeys = ["readLocal", "saveLocal"];
const twoKeys = ["readLocal", "saveLocal"];

export const convertToPlaceholders = <T extends object>(keys: string[]) =>
  keys.reduce(
    (result: T, key: string) => ({
      ...result,
      [key]: () => {
        throw new Error("No api Provider value supplied.");
      },
    }),
    {} as T,
  ) as T;

export const context: Context = createContext({
  one: convertToPlaceholders(oneKeys),
  two: convertToPlaceholders(twoKeys),
}) as types.Api;

export default context;
