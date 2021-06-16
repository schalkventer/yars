import * as {{ $oneCamel }} from './Complex.{{ $onePascal }}.types'
import * as {{ $twoCamel }} from './Complex.{{ $twoPascal }}.types'

/**
 * @name State
 *
 * @description TODO Add description
 */
export interface State {
    {{ $oneCamel }}: {{ $oneCamel }}.State
    {{ $twoCamel }}: {{ $twoCamel }}.State
    counter: number,
}

/**
 * @name Actions
 *
 * @description TODO Add description
 */
export interface Actions {
    one: {{ $oneCamel }}.Actions,
    two: {{ $twoCamel }}.Actions, 
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