import React, { FC } from "react"
import { tint } from "polished"
import { CircleBase } from "./Circle.elements"

/**
 * @name Offers
 *
 * @description TODO Add description
 */
export const Offers: FC<{ value: number }> = props => {
  const { value } = props

  return (
    <CircleBase
      label={value}
      custom={value > 10 ? "grey" : tint(1 - value / 10, "grey")}
    />
  )
}

export default Offers
