import { createContext, Context } from 'react'
import * as types from '../types/{{pascalCase name}}.types'

const apiKeys = ['readLocal', 'saveLocal']

export const apiSkeleton: types.Api = apiKeys.reduce(
  (result, key) => ({
    ...result,
    [key]: () => {
      throw new Error('No api Provider value supplied.')
    },
  }),
  {}
) as types.Api

export const context: Context<types.Api> = createContext(apiSkeleton)
export default context
