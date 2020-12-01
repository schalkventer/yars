import React, { FC, ChangeEvent } from "react"
import { FormControlLabel, Radio, FormGroup, Button } from '@material-ui/core'
import { COLUMN_KEY_NAME_MAP } from '../constants';
import styled from "styled-components"

import * as types from "./Options.types"
import * as viewTypes from '../types';
import { INITIAL_STATE } from './Options.constants';
import { COLUMN_KEYS } from '../constants';

const Base = styled.div`
  display: flex;
  padding: 2rem 2rem 1rem;
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
 * @name Sorting
 *
 * @description A component that should be rendered inside the sorting Popover
 * component. This component allows users to determine what types of rows should
 * be retrieved from the the server.
 */
export const Sorting: FC<types.SortingWithAll & { actions: types.Actions }> = props => {
  const { column, direction, actions } = props

  const handleClose = () => actions.updatePhase("resting")
  const handleDirection = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => actions.updateDirection(value as viewTypes.direction);
  const handleColumn = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => actions.updateColumn(value as viewTypes.columnKey);

  const handleReset = () => {
    actions.updateDirection(INITIAL_STATE.sorting.direction)
    actions.updateColumn(INITIAL_STATE.sorting.column)
  }

  /**
   * @name durectionGroup
   *
   * @description TODO Add description
   */
  const directionGroup = (
    <FormGroup onChange={handleDirection}>
      <FormControlLabel
        value="descending"
        control={
          <Radio name="Descending" checked={direction === "descending"} />
        }
        label="Descending"
      />
      <FormControlLabel
        value="ascending"
        control={<Radio name="Ascending" checked={direction === "ascending"} />}
        label="Ascending"
      />
    </FormGroup>
  )

  /**
   * @name columnGroup
   *
   * @description TODO Add description
   */
  const columnGroup = (
    <FormGroup onChange={handleColumn}>
      {COLUMN_KEYS.map(key => (
        <FormControlLabel
          key={key}
          value={key}
          control={<Radio name={key} checked={column === key} />}
          label={COLUMN_KEY_NAME_MAP[key]}
        />
      ))}
    </FormGroup>
  )

  return (
    <div>
      <Base>
        <Section>
          <Subtitle>Direction</Subtitle>
          {directionGroup}
        </Section>

        <Section>
          <Subtitle>Column</Subtitle>
          {columnGroup}
        </Section>
      </Base>

      <Actions>
        <ButtonsArea>
          <Button variant="contained" size="large" onClick={handleReset}>
            Reset Sorting
          </Button>

          <StyledButton variant="contained" size="large" onClick={handleClose}>
            Close
          </StyledButton>
        </ButtonsArea>
      </Actions>
    </div>
  )
}

export default Sorting
