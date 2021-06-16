import React, { FC } from "react";
import Provider from './api/Complex.Provider'
import { Complex as View } from './Complex'
import { useComplex } from './hooks/Complex.useComplex'

export const Complex: FC = () => {
    const [state, actions] = useComplex();
    return <Provider><View {...state} actions={actions} /></Provider>
}

export default Complex