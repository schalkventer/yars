import * as types from '../types/{{pascalCase name}}.types'
import { createApi as create{{ $onePascal }}Api } from './{{pascalCase name}}.{{ $onePascal }}.api'
import { createApi as create{{ $twoPascal }}Api } from './{{pascalCase name}}.{{ $twoPascal }}.api'

export const createApi = (): types.Api => {
    return {
      one: create{{ $onePascal }}Api(),
      two: create{{ $two }}Api(),
    }
}