import * as one from './Complex.One.types'
import * as two from './Complex.Two.types'

/**
 * @name State
 *
 * @description TODO Add description
 */
export interface State {
    one: one.State
    two: two.State
    counter: number,
}

/**
 * @name Actions
 *
 * @description TODO Add description
 */
export interface Actions {
    one: one.Actions,
    two: two.Actions, 
    reset: () => void
}

/**
 * @name Props
 *
 * @description TODO Add description
 */
export interface Props {}

/**
 * @name Api
 *
 * @description TODO Add description
 */
export interface Api {
    one: one.Api,
    two: two.Api, 
}