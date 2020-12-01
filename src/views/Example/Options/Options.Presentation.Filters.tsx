import React, { FC, ChangeEvent } from "react"
import styled from "styled-components"

import {
  FormControlLabel,
  Checkbox,
  FormGroup,
  Button,
} from "@material-ui/core"

import * as types from "./Options.types"

import {
  STATUS_KEYS,
  STATUS_KEY_NAME_MAP,
  STOCK_KEYS,
  STOCK_KEY_NAME_MAP,
} from "../constants"

const Content = styled.div`
  display: flex;
  padding: 2rem 2rem 0rem;
  width: 100%;
  flex-wrap: wrap;
`

const Subtitle = styled.div`
  font-size: 1.25rem;
  font-weight: 900;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0.5rem;
  margin-right: 2rem;
`

const Section = styled.div`
  width: 50%;
  padding-bottom: 1.5rem;
`

const Actions = styled.div`
  border-top: 1px solid #ccc;
  padding: 1rem;
`

const ButtonsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledButton = styled(Button)`
  && {
    margin-left: 1rem;
    background: #222;
    color: white;

    &:hover {
      background: black;
    }
  }
`

/**
 * @name Filters
 *
 * @description A component that should be rendered inside the filters Popover
 * component. This component allows users to determine what types of rows should
 * be retrieved from the the server.
 */
export const Filters: FC<
  types.FiltersWithAll & { actions: types.Actions }
> = props => {
  const { status, stock, actions } = props

  const handleClose = () => actions.updatePhase("resting")
  const handleStatus = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => actions.updateStatus(value as types.statusOptions);
  const handleStock = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => actions.updateStock(value as types.stockOptions);

  const handleReset = () => {
    actions.updateStock("all")
    actions.updateStatus("all")
  }

  /**
   * @name statusGroup
   *
   * @description A series of radio checkboxes that determine the products based
   * on status that should be returned from the server. Note that 'all' is
   * mutually exclusive with all other options. If 'all' is selected then all
   * other options are cleared, and likewise if other options are selected then
   * 'all' is automatically cleared.
   */
  const statusGroup = (
    <FormGroup onChange={handleStatus}>
      <FormControlLabel
        value="all"
        control={<Checkbox checked={status.all} name="all" />}
        label="All"
      />

      {STATUS_KEYS.map(key => (
        <FormControlLabel
          key={key}
          value={key}
          label={STATUS_KEY_NAME_MAP[key]}
          control={<Checkbox key={key} name={key} checked={status[key]} />}
        />
      ))}
    </FormGroup>
  )

  /**
   * @name stockGroup
   *
   * @description A series of radio checkboxes that determine the products based
   * on stock level that should be returned from the server. Note that 'all' is
   * mutually exclusive with all other options. If 'all' is selected then all
   * other options are cleared, and likewise if other options are selected then
   * 'all' is automatically cleared.
   */
  const stockGroup = (
    <FormGroup onChange={handleStock}>
      <FormControlLabel
        value="all"
        control={<Checkbox checked={stock.all} name="all" />}
        label="All"
      />

      {STOCK_KEYS.map(key => (
        <FormControlLabel
          key={key}
          value={key}
          control={<Checkbox name={key} checked={stock[key]} />}
          label={STOCK_KEY_NAME_MAP[key]}
        />
      ))}
    </FormGroup>
  )

  return (
    <div>
      <Content>
        <Section>
          <Subtitle>Status</Subtitle>
          {statusGroup}
        </Section>

        <Section>
          <Subtitle>Stock</Subtitle>
          {stockGroup}
        </Section>
      </Content>

      <Actions>
        <ButtonsArea>
          <Button variant="contained" size="large" onClick={handleReset}>
            Reset Filters
          </Button>

          <StyledButton variant="contained" size="large" onClick={handleClose}>
            Close
          </StyledButton>
        </ButtonsArea>
      </Actions>
    </div>
  )
}

export default Filters
