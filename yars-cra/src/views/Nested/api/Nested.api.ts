import * as types from '../types/Nested.types'
import { createApi as createOneApi } from './Nested.One.api'
import { createApi as createTwoApi } from './Nested.Two.api'

export const createApi = (): types.Api => {
    return {
      one: createOneApi(),
      two: createTwoApi(),
    }
}