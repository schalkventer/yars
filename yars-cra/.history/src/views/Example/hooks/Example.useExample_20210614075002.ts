import { useToggle } from 'react-use'
import * as types from '../types/Example.types'

export const useExample = (): [types.State, types.Actions] => {
    const [value, setValue] = useToggle(false)
    return [{ value }, { setValue}]
}

export default useExample

