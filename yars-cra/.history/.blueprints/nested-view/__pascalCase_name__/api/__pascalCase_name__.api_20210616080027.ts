import * as types from '../types/{{pascalCase name}}.types'
import { createApi as create{{ $one }}Api } from './{{pascalCase name}}.{{ $one }}.api'
import { createApi as create{{ $two }}Api } from './{{pascalCase name}}.{{ $two }}.api'

export const createApi = (): types.Api => {
    return {
      one: create{{ $one }}Api(),
      two: create{{ $two }}Api(),
    }
}