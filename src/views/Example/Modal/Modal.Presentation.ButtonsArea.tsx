import React, { FC } from "react"
import { Button } from "@material-ui/core"
import styled from "styled-components"
import { Alert, AlertTitle } from "@material-ui/lab"
import { ALERTS } from './Modal.constants';
import { Edit as EditIcon, Check as CheckIcon } from "@material-ui/icons"

import * as types from "./Modal.types"

const Base = styled.div`
  border-top: 1px solid #ccc;
  padding: 1rem;
`

const StyledAlert = styled(Alert)`
  margin-bottom: 1rem;
`

const Row = styled.div`
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
 * @name ButtonsArea
 *
 * @description TODO Add description
 */
export const ButtonsArea: FC<{
  phase: types.phase
  actions: types.Actions
  alert: types.alertKey | null,
}> = props => {
  const { phase, actions, alert } = props

  return (
    <Base>
      {!!alert && (
        <StyledAlert severity="warning">
          <AlertTitle>{ALERTS[alert].title}</AlertTitle>
          <span>{ALERTS[alert].message}</span>
        </StyledAlert>
      )}

      <Row>
        {phase === "resting" && (
          <Button
            variant="contained"
            size="large"
            startIcon={<EditIcon />}
            onClick={actions.initEdit}
          >
            Edit
          </Button>
        )}

        {phase === "editing" && (
          <Button variant="contained" size="large" onClick={actions.cancelEdit}>
            Cancel
          </Button>
        )}

        {phase === "editing" && (
          <StyledButton
            variant="contained"
            size="large"
            startIcon={<CheckIcon />}
            onClick={actions.saveEdit}
          >
            Save
          </StyledButton>
        )}

        {phase === "resting" && (
          <StyledButton
            variant="contained"
            size="large"
            onClick={actions.closeModal}
          >
            Close
          </StyledButton>
        )}
      </Row>
    </Base>
  )
}

export default ButtonsArea
