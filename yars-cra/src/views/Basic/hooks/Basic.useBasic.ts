import { useContext, useEffect } from 'react'
import { useToggle } from 'react-use'
import * as types from '../types/Basic.types'
import context from '../api/Basic.context'

export const useBasic = (): [types.State, types.Actions] => {
    const { readLocal, saveLocal } = useContext(context)

    const [value, toggleValue] = useToggle(readLocal())

    useEffect(() => {
        saveLocal(value)
    }, [saveLocal, value])

    return [{ value }, { toggleValue }]
}

export default useBasic

