import React, { FC } from "react"
import { STATUS_KEY_NAME_MAP, STOCK_KEY_NAME_MAP } from "../constants"
import * as viewTypes from "../types"
import { CircleBase, Tip } from "./Circle.elements"
import { STOCK_LEVEL_COLOR_MAP } from "./Circle.constants"

/**
 * @name Stock
 *
 * @description TODO Add description
 */
export const Stock: FC<{
  value: viewTypes.stockKey
  tooltip?: boolean
}> = props => {
  const { value, tooltip } = props

  if (tooltip) {
    return (
      <Tip title={STATUS_KEY_NAME_MAP[value]} placement="right">
        <CircleBase
          label={STOCK_KEY_NAME_MAP[value]}
          custom={STOCK_LEVEL_COLOR_MAP[value]}
        />
      </Tip>
    )
  }

  return (
    <CircleBase
      label={STOCK_KEY_NAME_MAP[value]}
      custom={STOCK_LEVEL_COLOR_MAP[value]}
    />
  )
}

export default Stock
