import { useContext, useEffect } from 'react'
import { useToggle } from 'react-use'
import * as types from '../types/Complex.One.types'
import context from '../api/Complex.context'

export const useOne = (): [types.State, types.Actions] => {
    const { one: { readLocal, saveLocal } } = useContext(context)
    const [value, toggleValue] = useToggle(readLocal())

    useEffect(() => {
        saveLocal(value)
    }, [saveLocal, value])

    return [{ value }, { toggleValue }]
}

export default useOne

