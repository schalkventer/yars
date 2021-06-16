import React, { FC } from "react";
import Provider from './api/Complex.Provider'
import { Complex as View } from './Complex'

export const Complex: FC = () => {
    return <Provider><View /></Provider>
}

export default Complex