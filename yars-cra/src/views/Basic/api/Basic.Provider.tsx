import React, { FC } from 'react'
import context from './Basic.context'
import { createApi } from './Basic.api';

export const Production: FC = (props) => {
    const { children } = props;
    return <context.Provider value={createApi()}>{children}</context.Provider>
}

export default Production
