import React, { FC } from 'react'
import context from './Example.context'
import { createApi } from './Example.createApi';

export const Production: FC = (props) => {
    const { children } = props;
    return <context.Provider value={createApi()}>{children}</context.Provider>
}

export default Production
