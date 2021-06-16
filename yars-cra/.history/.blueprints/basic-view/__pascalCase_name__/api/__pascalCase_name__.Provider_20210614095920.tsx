import React, { FC } from 'react'
import context from './{{pascalCase name}}.context'
import { createApi } from './{{pascalCase name}}.createApi';

export const Production: FC = (props) => {
    const { children } = props;
    return <context.Provider value={createApi()}>{children}</context.Provider>
}

export default Production
