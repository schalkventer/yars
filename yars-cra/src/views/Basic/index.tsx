import React, { FC } from "react";
import Provider from './api/Basic.Provider'
import { Basic as View } from './Basic'

export const Basic: FC = () => {
    return <Provider><View /></Provider>
}

export default Basic