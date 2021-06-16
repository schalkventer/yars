import { useContext, useEffect } from 'react'
import { useToggle } from 'react-use'
import * as types from '../types/{{pascalCase name}}.{{ $onePascal }}.types'
import context from '../api/{{pascalCase name}}.context'

export const use{{ $onePascal }} = (): [types.State, types.Actions] => {
    const { {{ $onePascal }}: { readLocal, saveLocal } } = useContext(context)
    const [value, toggleValue] = useToggle(readLocal())

    useEffect(() => {
        saveLocal(value)
    }, [saveLocal, value])

    return [{ value }, { toggleValue }]
}

export default use{{ $onePascal }}

