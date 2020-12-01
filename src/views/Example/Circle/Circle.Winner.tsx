import React, { FC } from "react"
import styled from "styled-components"
import { Check } from "@material-ui/icons"
import { Tip } from "./Circle.elements"

const Trophy = styled.div`
  opacity: 0.5;
  border: 1px solid grey;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

/**
 * @name Winner
 *
 * @description TODO Add description
 */
export const Winner: FC<{ tooltip?: boolean }> = props => {
  const { tooltip } = props

  if (tooltip) {
    return (
      <Tip title="You are the winner" placement="right">
        <Trophy>
          <Check />
        </Trophy>
      </Tip>
    )
  }

  return (
    <Trophy>
      <Check />
    </Trophy>
  )
}

export default Winner
