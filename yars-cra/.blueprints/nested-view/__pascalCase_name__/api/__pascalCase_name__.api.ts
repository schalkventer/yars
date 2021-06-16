import * as types from '../types/{{pascalCase name}}.types'
import { createApi as create{{ $OnePascal }}Api } from './{{pascalCase name}}.{{ $OnePascal }}.api'
import { createApi as create{{ $TwoPascal }}Api } from './{{pascalCase name}}.{{ $TwoPascal }}.api'

export const createApi = (): types.Api => {
    return {
      {{ $oneCamel }}: create{{ $OnePascal }}Api(),
      {{ $twoCamel }}: create{{ $TwoPascal }}Api(),
    }
}