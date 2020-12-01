import React, { FC } from "react"
import { Skeleton } from '@material-ui/lab';
import { Button } from "@material-ui/core"
import styled from "styled-components"

import * as types from "./TrackingList.types"

import { Modal } from '../Modal';
import { Options } from '../Options';
import { Table } from '../Table';

/**
 * @name Presentation
 *
 * @description TODO: Add description
 */
export const Presentation: FC<
  types.State & { actions: types.Actions }
> = props => {
  const { rows, phase, modal, actions } = props;

  return (
    <div>
      <Modal onUpdateProduct={console.log} data={modal} />
      <Options onUpdate={console.log} />
      <Table rows={rows} phase={phase} onTriggerModal={actions.openModal} />
    </div>
  )
}

export default Presentation
