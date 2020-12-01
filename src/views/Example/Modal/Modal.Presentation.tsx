import React, { FC } from "react"
import { Button, Dialog } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import styled from "styled-components"

import * as types from "./Modal.types"
import { ButtonsArea } from "./Modal.Presentation.ButtonsArea"
import { Summary } from "./Modal.Presentation.Summary"
import { Pricing } from "./Modal.Presentation.Pricing"
import { Winner } from "./Modal.Presentation.Winner"

const Base = styled(Dialog)`
  && .MuiPaper-root {
    width: 100%;
    max-width: 50rem;
  }
`

const Title = styled.div`
  && {
    font-size: 2rem;
    font-weight: 900;
    line-height: 1;
    padding-bottom: 0.25rem;
  }
`

const Wrapper = styled.div`
  padding: 2rem 2rem 4rem;
`

const Subtitle = styled.div`
  font-size: 1.25rem;
  font-weight: 900;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0.5rem;
  margin-right: 2rem;
`

const Row = styled.div`
  display: flex;
`

const Column = styled.div`
  width: 50%;
  padding-top: 1.5rem;
`

const Image = styled.img`
  width: 90%;
  min-height: 12rem;
`

/**
 * @name Presentation
 *
 * @description TODO: Add description
 */
export const Presentation: FC<
  types.State & { actions: types.Actions }
> = props => {
  const {
    phase,
    name,
    img,
    stock,
    status,
    offers,
    auto,
    price,
    winner,
    actions,
    alert,
    } = props

  return (
    <Base open onClose={actions.closeModal}>
      <Wrapper>
        <Title>{name}</Title>

        <Row>
          <Column>
            <Image src={img} alt="" />
          </Column>

          <Column>
            <Subtitle>Summary</Subtitle>
            <Summary offers={offers} stock={stock} status={status} />
          </Column>
        </Row>

        <Row>
          <Column>
            <Subtitle>Pricing</Subtitle>
            <Pricing price={price} auto={auto} phase={phase} actions={actions} />
          </Column>

          <Column>
            <Subtitle>Winner</Subtitle>
            <Winner winner={winner} price={price} />
          </Column>
        </Row>
      </Wrapper>

      <ButtonsArea phase={phase} actions={actions} alert={alert} />
    </Base>
  )
}

export default Presentation
