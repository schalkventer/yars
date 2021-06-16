import React, { FC } from 'react'
import context from '../../api/Example.context'
import * as types from '../../types/Example.types'

const value: types.Api = {
    readLocal: () => false,
    saveLocal: () => undefined,
}

export const Provider: FC = (props) => {
    const { children } = props;
    return <context.Provider value={value}>{children}</context.Provider>
}

export default Provider
