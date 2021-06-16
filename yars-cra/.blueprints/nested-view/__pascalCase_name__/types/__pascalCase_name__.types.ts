import * as {{ $oneCamel }} from './{{pascalCase name}}.{{ $OnePascal }}.types'
import * as {{ $twoCamel }} from './{{pascalCase name}}.{{ $TwoPascal }}.types'

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
    {{ $oneCamel }}: {{ $oneCamel }}.Actions,
    {{ $twoCamel }}: {{ $twoCamel }}.Actions, 
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
    {{ $oneCamel }}: {{ $oneCamel }}.Api,
    {{ $twoCamel }}: {{ $twoCamel }}.Api, 
}