import * as types from '../types/Complex.types'
import { createApi as createOneApi } from './Complex.One.api'
import { createApi as createTwoApi } from './Complex.Two.api'

export const createApi = (): types.Api => {
    return {
      one: createOneApi(),
      two: createTwoApi(),
    }
}