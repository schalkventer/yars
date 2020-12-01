import React, { FC } from "react"
import { STATUS_KEY_NAME_MAP } from "../constants"
import * as viewTypes from "../types"
import { CircleBase, Tip } from "./Circle.elements"

import {
  STATUS_KEYS_LETTERS_MAP,
  STATUS_KEYS_COLOR_MAP,
} from "./Circle.constants"

/**
 * @name Status
 *
 * @description TODO Add description
 */
export const Status: FC<{
  value: viewTypes.statusKey
  tooltip?: boolean
}> = props => {
  const { value, tooltip } = props

  if (tooltip) {
    return (
      <Tip title={STATUS_KEY_NAME_MAP[value]} placement="right">
        <CircleBase
          label={STATUS_KEYS_LETTERS_MAP[value]}
          custom={STATUS_KEYS_COLOR_MAP[value]}
        />
      </Tip>
    )
  }

  return (
    <CircleBase
      label={STATUS_KEYS_LETTERS_MAP[value]}
      custom={STATUS_KEYS_COLOR_MAP[value]}
    />
  )
}

export default Status
