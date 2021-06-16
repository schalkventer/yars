import React, { FC } from 'react'
import context from '../../api/Example.context'

export const Provider: FC = (props) => {
    const { children } = props;
    return <context.Provider>{children}</context.Provider>
}

export default Provider
