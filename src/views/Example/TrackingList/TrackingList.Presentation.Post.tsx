import React, { FC } from 'react';
import { Paper, Typography } from '@material-ui/core';
import * as types from './TrackingList.types';
import styled from 'styled-components';

const Base = styled(Paper)<{ selected: boolean }>`
    padding: 2rem;
    min-height: 15rem;
    background: ${({ selected }) => selected ? 'rgb(237, 247, 237);' : 'rgb(232, 244, 253)'};
`

/**
 * @name Post
 *
 * @description TODO: Add description
 */
export const Post: FC<types.Post> = (props) => {
    const { title, body, selected } = props;
    
    return (
        <Base selected={selected}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body2">{body}</Typography>
        </Base>
    )
}

export default Post;
