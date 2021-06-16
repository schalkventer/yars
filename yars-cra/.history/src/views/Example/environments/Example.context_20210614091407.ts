import { createContext, Context } from 'react'
import * as types from '../types'

const apiKeys = ['getSales', 'downloadCsv', 'uploadCsv']

export const apiSkeleton = apiKeys.reduce(
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
