import { useToggle } from 'react-use'
import * as types from '../types/Example.types'

export const useExample = (): [types.State, types.Actions] => {
    const [value, toggleValue] = useToggle(false)
    return [{ value }, { toggleValue }]
}

export default useExample

