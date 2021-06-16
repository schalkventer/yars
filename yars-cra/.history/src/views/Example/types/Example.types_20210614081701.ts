interface Value {
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
    setValue: (newValue?: boolean) => void
}

/**
 * @name Props
 *
 * @description TODO Add description
 */
export interface Props {}