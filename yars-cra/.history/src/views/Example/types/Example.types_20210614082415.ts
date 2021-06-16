/**
 * @name Value
 *
 * @description TODO Add description
 */
export interface ValueMap {
    color: "green" | "red",
    text: "On" | "Off",
    icon: JSX.Element,
}

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