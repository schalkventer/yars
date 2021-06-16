import { useContext } from 'react'
import { useToggle } from 'react-use'
import * as types from '../types/Example.types'
import context from '../api/Example.context'

export const useExample = (): [types.State, types.Actions] => {
    const { readLocal, saveLocal } = useContext(context)

    const [value, toggleValue] = useToggle(false)
    return [{ value }, { toggleValue }]
}

export default useExample

