import React, { FC } from "react"
import styled from "styled-components"

import { toZAR } from "@/utilities/formatCurrency"

import * as viewTypes from "../types"
import * as types from "./Table.types"
import { COLUMN_KEY_PADDING_MAP, COLUMN_KEY_WIDTH_MAP } from "./Table.constants"
import { Circle } from "../Circle"

const Thumbnail = styled.img`
  width: 25px;
  height: 20px;
  margin-right: 1rem;
`

const Cell = styled.div<{ columnKey: viewTypes.columnKey, align?: 'left' | 'center' }>`
  display: flex;
  align-items: center;
  justify-content: ${({ align = 'center'}) => align === 'left' ? 'flex-start' : 'center'};
  border-top: 1px solid #e0e0e0;
  vertical-align: center;
  height: 3.3125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 0 ${({ columnKey }) => COLUMN_KEY_PADDING_MAP[columnKey]}rem;
  width: ${({ columnKey }) => columnKey === 'productTitle' ? '100%' : `${COLUMN_KEY_WIDTH_MAP[columnKey]}rem`};
`

const Disabled = styled.em`
  opacity: 0.6;
`

const Base = styled.tr`
  cursor: pointer;
  width: 100%;
  position: relative;
  transition: background 0.1s;

  &:hover {
    background: #eee;
  }

  &:active {
    background: #ddd;
  }
`

const Text = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

/**
 * @name Winner
 *
 * @description TODO Add description
 */
const Winner: FC<{ winner: true | viewTypes.Competitor }> = props => {
  const { winner } = props

  if (winner === true) {
    return <Circle variant="winner" tooltip />
  }

  if (!winner || !winner.name) {
    throw new Error(
      `User is not the winner, but "${winner}" is not the correct schema`
    )
  }

  return (
    <Text>
      {winner.name} ({toZAR(winner.price)})
    </Text>
  )
}

const ProductTitleWrap = styled.td`
  width: 100%;
`

/**
 * @name Row
 *
 * @description TODO: Add description
 */
export const Row: FC<viewTypes.Product & { onTriggerModal: (id: string) => void }> = props => {
  const { id, img, name, winner, price, offers, status, stock, auto, onTriggerModal } = props
  const handleClick = () => onTriggerModal(id);


  return (
    <Base onClick={handleClick}>
      <ProductTitleWrap>
        <Cell columnKey="productTitle" align="left">
          <Thumbnail src={img} alt="" />
          <Text><strong>{name}</strong></Text>
        </Cell>
      </ProductTitleWrap>

      <td>
        <Cell columnKey="winner">
          <Winner winner={winner} />
        </Cell>
      </td>

      <td>
        <Cell columnKey="myPrice"><strong>{toZAR(price)}</strong></Cell>
      </td>

      <td>
        <Cell columnKey="offers">
          <Circle variant="offers" value={offers} />
        </Cell>
      </td>

      <td>
        <Cell columnKey="status">
          <Circle variant="status" value={status} tooltip />
        </Cell>
      </td>

      <td>
        <Cell columnKey="stock">
          <Circle variant="stock" value={stock} tooltip />
        </Cell>
      </td>

      <td>
        <Cell columnKey="autoPricing">
          {!auto && <Disabled>Disabled</Disabled>}
          {!!auto && `${toZAR(auto[0])} — ${toZAR(auto[1])}`}
        </Cell>
      </td>
    </Base>
  )
}

export default Row

// import React, { useCallback } from 'react'
// import styled from 'styled-components'

// import { Circle } from './TrackingTable.Presentation.Circle'
// import { formatCurrency } from './TrackingTable.Presentation.formatCurrency'
// import { CELL_PADDING_MAP } from './TrackingTable.constants'

// const Thumbnail = styled.img`
//   width: 25px;
//   height: 20px;
// `

// const ThumbWrap = styled.div`
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// const Cell = styled.td`
//   border-top: 1px solid #e0e0e0;
//   vertical-align: center;
//   height: 3.3125rem;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   padding: 0 ${({ size }) => CELL_PADDING_MAP[size || 'small']}rem;
// `

// const Disabled = styled.em`
//   opacity: 0.6;
// `

// const RowButton = styled.tr`
//   cursor: pointer;

//   &:hover {
//     background: #eee;
//   }
// `

// const Text = styled.div`
//   text-align: center;
// `

// /**
//  * @name Row
//  *
//  * @description TODO Add description
//  */
// export const Row = (props) => {
//   const { id, img, name, winner, price, offers, status, stock, auto, onOpenModal } = props
//   const handleOpenModal = useCallback(() => onOpenModal(id), [onOpenModal, id])

//   return (

//
//       </RowButton>
//   )
// }

// export default Row
