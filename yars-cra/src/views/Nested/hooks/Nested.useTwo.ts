import { useContext, useEffect } from 'react'
import { useToggle } from 'react-use'
import * as types from '../types/Nested.Two.types'
import context from '../api/Nested.context'

export const Two = (): [types.State, types.Actions] => {
    const { two: { readLocal, saveLocal } } = useContext(context)
    const [value, toggleValue] = useToggle(readLocal())

    useEffect(() => {
        saveLocal(value)
    }, [saveLocal, value])

    return [{ value }, { toggleValue }]
}

export default Two

