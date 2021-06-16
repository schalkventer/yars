import * as types from '../types/{{pascalCase name}}.types'
import { createApi as create{{ $onePascal }}Api } from './{{pascalCase name}}.{{ $onePascal }}.api'
import { createApi as create{{ $twoPascal }}Api } from './{{pascalCase name}}.{{ $two }}.api'

export const createApi = (): types.Api => {
    return {
      one: create{{ $one }}Api(),
      two: create{{ $two }}Api(),
    }
}