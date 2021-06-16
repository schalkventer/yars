import React, { FC } from 'react'
import { Provider } from './Example.context'

export const Production: FC = (props) => {
    const { children } = props;
    return <Provider>{children}</Provider>
}

export default Production
