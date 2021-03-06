import { useContext, useEffect } from 'react'
import { useToggle } from 'react-use'
import * as types from '../types/Complex.Two.types'
import context from '../api/Complex.context'

export const useTwo = (): [types.State, types.Actions] => {
    const { two: { readLocal, saveLocal } } = useContext(context)
    const [value, toggleValue] = useToggle(readLocal())

    useEffect(() => {
        saveLocal(value)
    }, [saveLocal, value])

    return [{ value }, { toggleValue }]
}

export default useTwo

