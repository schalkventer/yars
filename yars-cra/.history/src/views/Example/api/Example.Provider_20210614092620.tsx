import React, { FC } from 'react'
import { Provider } from './Example.context'
import { createApi } from './Example.createApi';

export const Production: FC = (props) => {
    const { children } = props;
    return <Provider value={createApi()}>{children}</Provider>
}

export default Production
