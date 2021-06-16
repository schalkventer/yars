import React, { FC } from 'react'
import { Provider } from './Example.context'
import createApi 

export const Production: FC = (props) => {
    const { children } = props;
    return <Provider>{children}</Provider>
}

export default Production
