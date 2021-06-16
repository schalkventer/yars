import React, { FC } from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import * as types from './{{pascalCase name}}.types'

const Base = styled(Paper)`
  display: flex;
`

/**
 * @name {{pascalCase name}}
 *
 * @description TODO: Add description
 */
export const {{pascalCase name}}: FC<types.Props> = props => {
  const { value, children } = props

  return (
    <Base>
      <div>{children}</div>
      <div>{value}</div>
    </Base>
  )
}

export default {{pascalCase name}}
