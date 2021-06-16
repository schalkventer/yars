import * as {{ $oneCamel }} from './Complex.{{ $OnePascal }}.types'
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
    one: {{ $oneCamel }}.Api,
    two: {{ $twoCamel }}.Api, 
}