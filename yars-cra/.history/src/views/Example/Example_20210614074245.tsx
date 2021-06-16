import React, { FC } from 'react';
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { ToggleOff as OffIcon, ToggleOn as OnIcon} from '@material-ui/icons'

import useExample from './hooks/Example.useExample'
import * as types from './types/Example.types'

const VALUE_COLOR_MAP = new Map([
    [true, 'green'],
    [false, 'red']
])

const Base = styled.div`
    padding: 1rem;
`

const StyledButton = styled(Button)<{ value: boolean }>`
    background: ${({ value }) => VALUE_COLOR_MAP.get(value)};
    color: white;
`

export const Presentation: FC<types.State & { actions: types.Actions }> = (props) => {
    const { value } = props;

    return (
        <Base>
            <StyledButton>{value ? 'ON' : 'OFF'}</StyledButton>
        </Base>
    )
}

const Example = (): FC => {
    const [state, actions] = useExample()
    return <Presentation {...state} actions={actions} />
}