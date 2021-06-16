import { createContext } from "react";
import * as types from "../types/{{pascalCase name}}.types";

const {{ $one }}Keys = ["readLocal", "saveLocal"];
const {{ $two }}Keys = ["readLocal", "saveLocal"];

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

export const context = createContext<types.Api>({
  {{ $one }}: convertToPlaceholders({{ $one }}Keys),
  {{ $two }}: convertToPlaceholders({{ $two }}Keys),
})

export default context;
