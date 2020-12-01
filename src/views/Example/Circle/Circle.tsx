import React, { FC } from "react"

import * as types from "./Circle.types"
import * as viewTypes from "../types"
import { STATUS_KEYS, STOCK_KEYS } from "../constants"
import { Winner } from "./Circle.Winner"
import { Status } from "./Circle.Status"
import { Stock } from "./Circle.Stock"
import { Offers } from "./Circle.Offers"

/**
 * @name Circle
 *
 * @description Iconography used to communicate a specific aspect of a product.
 * Can optionally include tooltip that surfaces the value associated with a
 * specific circle. If no tooltip is include make sure that context is
 * sufficient that user will be able to understand the meaning behind specific
 * circle.
 */
export const Circle: FC<types.Props> = props => {
  const { variant, value, tooltip = false } = props

  /**
   * If "winner" variant is passed then a checkbox is returned. This variant
   * does not require a value. However, all other variants require values,
   * therefore an error will be thrown if the variant is not "winner" and no
   * value has been provided.
   */

  if (variant === "winner") {
    return <Winner tooltip={tooltip} />
  }

  if (value === undefined) {
    throw new Error(
      `The variant "${variant}" requires a value, but no value was supplied.`
    )
  }

  /**
   * If variant is "stock" and a valid stock string has been passed as a value
   * then a circle with the relevant color and abbreviated letter/s will be
   * returned.
   */

  if (variant === "stock") {
    const valueAsStock = value as viewTypes.stockKey

    if (!STOCK_KEYS.includes(valueAsStock)) {
      throw new Error(
        `"${valueAsStock}" is not a valid value for variant "stock"`
      )
    }

    return <Stock value={valueAsStock} tooltip={tooltip} />
  }

  /**
   * If variant is "status" and a valid status string has been passed as a value
   * then a circle with the relevant color and abbreviated letter/s will be
   * returned.
   */

  if (variant === "status") {
    const valueAsStatus = value as viewTypes.statusKey

    if (!STATUS_KEYS.includes(valueAsStatus)) {
      throw new Error(
        `"${valueAsStatus}" is not a valid value for variant "status"`
      )
    }

    return <Status value={valueAsStatus} tooltip={tooltip} />
  }
  /**
   * If variant is "offers" and a number is supplied to value then that value
   * will be included inside the circle with the relevant background color.
   */

  if (variant === "offers") {
    if (typeof value !== "number") {
      throw new Error("Value for offer variant prop should be number")
    }

    return <Offers value={value} />
  }

  throw new Error("Invalid variant prop supplied.")
}

export default Circle
