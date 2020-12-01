import React, { FC } from "react"
import { Skeleton } from "@material-ui/lab"
import styled from "styled-components"

import * as viewTypes from "../types"
import { COLUMN_KEY_PADDING_MAP, COLUMN_KEY_WIDTH_MAP } from "./Table.constants"

const Cell = styled.div<{
  columnKey: viewTypes.columnKey
  align?: "left" | "center"
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ align = "center" }) =>
    align === "left" ? "flex-start" : "center"};
  border-top: 1px solid #e0e0e0;
  vertical-align: center;
  height: 3.3125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 0 ${({ columnKey }) => COLUMN_KEY_PADDING_MAP[columnKey]}rem;
  
  width: ${({ columnKey }) =>
    columnKey === "productTitle"
      ? "100%"
      : `${COLUMN_KEY_WIDTH_MAP[columnKey]}rem`};
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

const ProductTitleWrap = styled.td`
  width: 100%;
`

/**
 * @name Row
 *
 * @description TODO: Add description
 */
export const LoadingRow: FC = () => {
  return (
    <Base>
      <ProductTitleWrap>
        <Cell columnKey="productTitle" align="left">
          <Skeleton width={250}  />
        </Cell>
      </ProductTitleWrap>

      <td>
        <Cell columnKey="winner">
          <Skeleton width={150}  />
        </Cell>
      </td>

      <td>
        <Cell columnKey="myPrice">
          <Skeleton width={100}  />
        </Cell>
      </td>

      <td>
        <Cell columnKey="offers">
        <Skeleton variant="circle" width={30} height={30} />
        </Cell>
      </td>

      <td>
        <Cell columnKey="status">
          <Skeleton variant="circle" width={30} height={30} />
        </Cell>
      </td>

      <td>
        <Cell columnKey="stock">
        <Skeleton variant="circle" width={30} height={30} />
        </Cell>
      </td>

      <td>
        <Cell columnKey="autoPricing">
          <Skeleton width={100} />
        </Cell>
      </td>
    </Base>
  )
}

export default LoadingRow
