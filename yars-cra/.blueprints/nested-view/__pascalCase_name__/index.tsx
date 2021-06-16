import React, { FC } from "react";
import Provider from './api/{{pascalCase name}}.Provider'
import { {{pascalCase name}} as View } from './{{pascalCase name}}'
import { use{{pascalCase name}} } from './hooks/{{pascalCase name}}.use{{pascalCase name}}'

export const {{pascalCase name}}: FC = () => {
    const [state, actions] = use{{pascalCase name}}();
    return <Provider><View {...state} actions={actions} /></Provider>
}

export default {{pascalCase name}}