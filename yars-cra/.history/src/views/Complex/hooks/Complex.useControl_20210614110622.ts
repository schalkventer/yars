import { useContext, useEffect } from 'react'
import { useToggle } from 'react-use'
import * as types from '../types/Complex.types'
import context from '../api/Complex.context'

export const useComplex = (): [types.State, types.Actions] => {
    const { readLocal, saveLocal } = useContext(context)

    const [value, toggleValue] = useToggle(readLocal())

    useEffect(() => {
        saveLocal(value)
    }, [saveLocal, value])

    return [{ value }, { toggleValue }]
}

export default useComplex

