import { useContext, useEffect } from 'react'
import { useToggle } from 'react-use'

import * as types from '../types/Complex.types'
import context from '../api/Complex.context'
import { useOne } from './Complex.useOne'
import { useTwo } from './Complex.useTwo'


export const useComplex = (): [types.State, types.Actions] => {
    const one = useOne();
    const two = useTwo();

    const [value, toggleValue] = useToggle(readLocal())

    useEffect(() => {
        saveLocal(value)
    }, [saveLocal, value])

    return [{ value }, { toggleValue }]
}

export default useComplex

