import React from 'react';
import { Presentation } from '../TrackingList.Presentation';
import * as mocks from '../TrackingList.mocks';

export default {
  title: 'views/Example/TrackingList/TrackingList.Presentation',
  component: Presentation,
}

export const Default = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} />
export const Modal = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} modal={mocks.STATE.rows[0]} />
export const Loading = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} phase="recreating" />
export const Adding = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} phase="adding" />
