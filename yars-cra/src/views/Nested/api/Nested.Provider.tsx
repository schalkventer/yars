import React, { FC } from 'react'
import context from './Nested.context'
import { createApi } from './Nested.api';

export const Production: FC = (props) => {
    const { children } = props;
    return <context.Provider value={createApi()}>{children}</context.Provider>
}

export default Production
