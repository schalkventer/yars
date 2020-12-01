import React, { FC } from "react"
import { COLUMN_KEY_PADDING_MAP, COLUMN_KEY_WIDTH_MAP, COLUMN_KEY_TOOLTIP_MAP } from "./Table.constants"
import { COLUMN_KEYS, COLUMN_KEY_NAME_MAP } from "../constants"
import { Tooltip } from "@material-ui/core"
import { Help as HelpIcon } from "@material-ui/icons"
import styled from "styled-components"

import * as viewTypes from "../types"
import * as types from "./Table.types"
import { Row } from "./Table.Row"
import { LoadingRow } from "./Table.LoadingRow"

const Base = styled.table`
  && {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
  }
`

const HeaderCell = styled.div<{ columnKey: viewTypes.columnKey }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.3125rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 ${({ columnKey }) => COLUMN_KEY_PADDING_MAP[columnKey]}rem;
  width: ${({ columnKey }) => columnKey === 'productTitle' ? '100%' : `${COLUMN_KEY_WIDTH_MAP[columnKey]}rem`};
`

const Icon = styled(HelpIcon)`
  && {
    cursor: help;
    width: 1rem;
    height: 1rem;
    opacity: 0.5;
    margin-left: 0.5rem;

    &:hover {
      opacity: 0.9;
    }
  }
`

const NoDataWrap = styled.div`
  border-top: 1px solid #e0e0e0;
  padding: 1rem 3rem;
`

const NoData = styled.div`
  border-radius: 6px;
  border: 1px dotted #ccc;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: #ccc;
  min-height: 6rem;
`

const HeaderCellWrap = styled.th<{ columnKey: viewTypes.columnKey }>`
  width: ${({ columnKey }) => columnKey === 'productTitle' ? '100%' : 'auto'};
`

const LoadingRows = () => {
  return (
    <>
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
    </>
  )
}

/**
 * @name Table
 *
 * @description TODO: Add description
 */
export const Table: FC<types.Props> = props => {
  const { rows, phase, onTriggerModal } = props

  return (
    <div>
      <Base cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            {COLUMN_KEYS.map(key => (
              <HeaderCellWrap columnKey={key} key={key}>
                <HeaderCell columnKey={key}>
                  <span>{COLUMN_KEY_NAME_MAP[key]}</span>

                  <Tooltip title={COLUMN_KEY_TOOLTIP_MAP[key]}>
                    <Icon />
                  </Tooltip>
                </HeaderCell>
              </HeaderCellWrap>
            ))}
          </tr>
        </thead>

        <tbody>
          {phase !== "recreating" &&
            rows.map(item => <Row key={item.id} {...item} onTriggerModal={onTriggerModal} />)}
          {(phase === "adding" || phase === "recreating") && <LoadingRows />}
        </tbody>
      </Base>

      {phase === 'resting' && rows.length < 1 && (
        <NoDataWrap>
          <NoData>
            No products match your query.
          </NoData>
        </NoDataWrap>
      )}
    </div>
  )
}

export default Table;
