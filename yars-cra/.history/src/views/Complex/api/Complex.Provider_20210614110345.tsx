import React, { FC } from 'react'
import context from './Complex.context'
import { createApi } from './Complex.createApi';

export const Production: FC = (props) => {
    const { children } = props;
    return <context.Provider value={createApi()}>{children}</context.Provider>
}

export default Production
