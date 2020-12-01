import React, { FC, ChangeEvent } from "react"
import styled from "styled-components"
import { Button, TextField, InputAdornment } from "@material-ui/core"
import { toZAR } from "@/utilities/formatCurrency"
import * as types from "./Modal.types"

const Label = styled.span`
  padding-left: 0.5rem;
`

const Value = styled.div`
  padding-top: 0.25rem;
`

const ValueWrap = styled.div`
  padding-top: 1rem;
`

const Text = styled.span<{ disabled?: boolean }>`
  && {
    color: ${({ disabled = false }) => disabled ? '#6c6c6c8a' : 'rgba(0, 0, 0, 0.87)'};
  }
`

/**
 * @name Pricing
 *
 * @description TODO Add description
 */
export const Pricing: FC<{
  phase: types.phase
  price: number
  auto: false | [number, number]
  actions: types.Actions
}> = props => {
  const { phase, price, auto, actions } = props

  const handleMin = ({ target: { value }}: ChangeEvent<HTMLInputElement>) => actions.updateMin(parseInt(value, 10));
  const handleMax = ({ target: { value }}: ChangeEvent<HTMLInputElement>) => actions.updateMax(parseInt(value, 10));

  if (phase === "resting") {
    return (
      <div>
        <Value>
          <strong>Current:</strong>
          <Label>{toZAR(price)}</Label>
        </Value>

        <Value>
          <strong>Minimum Auto:</strong>
          <Label>{auto ? toZAR(auto[0]) : <em>Disabled</em>}</Label>
        </Value>

        <Value>
          <strong>Maximum Auto:</strong>
          <Label>{auto ? toZAR(auto[1]) : <em>Disabled</em>}</Label>
        </Value>
      </div>
    )
  }

  if (!auto) {
    return (
      <div>
        <ValueWrap>
          <TextField
            variant="outlined"
            label="Current Price"
            disabled
            value={price}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R</InputAdornment>
              ),
            }}
          />
        </ValueWrap>

        <ValueWrap>
          <Button
            variant="contained"
            size="large"
            onClick={actions.toggleAutoActive}
          >
            Enable Auto Pricing
          </Button>
        </ValueWrap>
      </div>
    )
  }

  return (
    <div>
      <ValueWrap>
        <TextField
          variant="outlined"
          label="Current Price"
          disabled
          value={price}
          InputProps={{
            startAdornment: <InputAdornment position="start">R</InputAdornment>,
          }}
        />
      </ValueWrap>

      <ValueWrap>
        <TextField
          variant="outlined"
          label="Minimum Auto"
          onChange={handleMin}
          value={auto[0]}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Text>R</Text>
              </InputAdornment>
            ),
          }}
        />
      </ValueWrap>

      <ValueWrap>
        <TextField
          variant="outlined"
          label="Maximum Auto"
          onChange={handleMax}
          value={auto[1]}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Text>R</Text>
              </InputAdornment>
            ),
          }}
        />
      </ValueWrap>

      <ValueWrap>
        <Button
          variant="contained"
          size="large"
          onClick={actions.toggleAutoActive}
        >
          Disable Auto Pricing
        </Button>
      </ValueWrap>
    </div>
  )
}

export default Pricing
