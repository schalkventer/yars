import React, { FC } from "react";
import Provider from './api/{{pascalCase name}}.Provider'
import { {{pascalCase name}} as View } from './{{pascalCase name}}'

export const {{pascalCase name}}: FC = () => {
    return <Provider><View /></Provider>
}

export default {{pascalCase name}}