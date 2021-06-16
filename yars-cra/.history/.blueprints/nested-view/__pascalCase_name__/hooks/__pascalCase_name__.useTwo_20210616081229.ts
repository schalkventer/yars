import { useContext, useEffect } from 'react'
import { useToggle } from 'react-use'
import * as types from '../types/{{pascalCase name}}.{{ $twoPascal }}.types'
import context from '../api/{{pascalCase name}}.context'

export const {{ $twoPascal }} = (): [types.State, types.Actions] => {
    const { two: { readLocal, saveLocal } } = useContext(context)
    const [value, toggleValue] = useToggle(readLocal())

    useEffect(() => {
        saveLocal(value)
    }, [saveLocal, value])

    return [{ value }, { toggleValue }]
}

export default {{ $twoPascal }}

