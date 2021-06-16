import React, { FC } from 'react';
import useExample from './hooks/Example.useExample'
import * as types from './types/Example.types'

export const Presentation = () => {

}

const Example = (): FC<types.State & { actions: types.Actions }> => {
    const [state, actions] = useExample()
    return <Presentation {...state} actions={actions} />
}