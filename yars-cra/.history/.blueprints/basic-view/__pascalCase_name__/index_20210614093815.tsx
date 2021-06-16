import React, { FC } from "react";
import Provider from './api/Example.Provider'
import { Example as View } from './Example'

export const Example: FC = () => {
    return <Provider><View /></Provider>
}

export default Example