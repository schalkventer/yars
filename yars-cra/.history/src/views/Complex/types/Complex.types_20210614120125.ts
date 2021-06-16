import * as display from './Complex.Display.types'
import * as control from './Complex.Control.types'

/**
 * @name State
 *
 * @description TODO Add description
 */
export interface State {
    value: boolean
}

/**
 * @name Actions
 *
 * @description TODO Add description
 */
export interface Actions {
    toggleValue: () => void
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
    control: control.Api,
    display: display.Api, 
}