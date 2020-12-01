import React from 'react';
import styled from 'styled-components';
import { Base } from '../../Base';

const Placeholder = styled.div`
    background: grey;
    border: 1px solid black;
    padding: 2rem;
    height: 100%;
`

export default {
    title: 'components/Base',
    component: Base,
  }

export const Default = () => <Placeholder>Provident beatae eos explicabo fugiat autem quos aut et.</Placeholder>;
