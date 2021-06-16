import { createContext, Context } from 'react'
import * as types from '../types/Complex.types'

const oneKeys = ['readLocal', 'saveLocal']
const twoKeys = ['readLocal', 'saveLocal']

export const convertToPlaceholders = (keys) => keys.reduce(
  (result, key) => ({
    ...result,
    [key]: () => {
      throw new Error('No api Provider value supplied.')
    },
  }),
  {}
) as types.Api


export const context: Context<types.Api> = createContext({
  one: convertToPlaceholders(oneKeys),
  two: convertToPlaceholders(oneKeys),
})
export default context
