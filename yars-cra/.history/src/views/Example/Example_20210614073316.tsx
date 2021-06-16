import React from 'react';
import useExample from './hooks/Example.useExample'

export const Presentation = () => {

}

const Example = () => {
    const [state, actions] = useExample()
    return <Presentation {...state} actions={actions} />
}