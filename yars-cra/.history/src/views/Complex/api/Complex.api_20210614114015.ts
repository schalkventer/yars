import * as types from '../types/Complex.types'
import { createApi as createControlApi } from './Complex.Control.api'
import { createApi as createDisplayApi } from './Complex.Display.api'

export const createApi = (): types.Api => {
    const control = createControlApi()
    const display = createDisplayApi()

    return {
      control,
      display,
    }
}