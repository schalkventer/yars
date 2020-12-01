import React, { FC } from 'react';
import styled from 'styled-components';
import * as viewTypes from '../types';
import { Circle } from '../Circle';
import { STOCK_KEY_NAME_MAP, STATUS_KEY_NAME_MAP } from '../constants';

const Label = styled.span`
  padding-left: 0.5rem;
`

const Value = styled.div`
  padding-top: 0.25rem;
`

/**
 * @name Summary
 *
 * @description TODO Add description
 */
export const Summary: FC<{ offers: number; status: viewTypes.statusKey; stock: viewTypes.stockKey }> = (props) => {
    const { offers, status, stock } = props;

    return (
        <div>
            <Value>
              <Circle variant='offers' value={offers} />
              <Label>Offer</Label>
            </Value>

            <Value>
              <Circle variant='status' value={status} />
              <Label>{STATUS_KEY_NAME_MAP[status]}</Label>
            </Value>

            <Value>
              <Circle variant='stock' value={stock} />
              <Label>{STOCK_KEY_NAME_MAP[stock]}</Label>
            </Value>
        </div>
    )
}

export default Summary;