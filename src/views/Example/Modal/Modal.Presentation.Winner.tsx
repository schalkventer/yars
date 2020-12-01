import React, { FC } from "react"
import * as viewTypes from "../types"
import styled from "styled-components"
import { Circle } from "../Circle"
import { toZAR } from "@/utilities/formatCurrency"

const Label = styled.span`
  padding-left: 0.5rem;
`

const Value = styled.div`
  padding-top: 0.25rem;
`

const WinnerWrap = styled.div`
  display: flex;
  align-items: center
`

const WinnerText = styled.strong`
  padding-left: 0.5rem;
`

const Link = styled.a`
  color: black;
  text-decoration: underline;
  cursor: pointer;
  padding: 0.25rem;
  margin: -0.25rem;
  border-radius: 4px;

  &:hover {
    background: #eee;
  }
`

/**
 * @name Winner
 *
 * @description TODO Add description
 */
export const Winner: FC<{
  winner: true | viewTypes.Competitor
  price: number
}> = props => {
  const { winner, price } = props

  if (winner === true) {
    return (
      <WinnerWrap>
          <Circle variant="winner" /> 
          <WinnerText>You</WinnerText>
      </WinnerWrap>
    )
  }

  const difference = price - winner.price

  return (
    <div>
      <Value>
        <strong>Competitor:</strong>
        <Label>
          <Link href={winner.url} target="_blank">
            {winner.name}
          </Link>
        </Label>
      </Value>

      <Value>
        <strong>Price:</strong>
        <Label>{toZAR(winner.price)}</Label>
      </Value>

      {difference > 0 && (
        <Value>
          <strong>Difference:</strong>
          <Label>{toZAR(price - winner.price)}</Label>
        </Value>
      )}
    </div>
  )
}

export default Winner
