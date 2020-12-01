import React from 'react';
import { Presentation } from '../Modal.Presentation';
import * as mocks from '../Modal.mocks';

export default {
  title: 'views/Example/Modal/Modal.Presentation',
  component: Presentation,
}

export const Default = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} />
export const NoAuto = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} auto={false} />
export const NotWinner = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} />

export const Editing = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} phase="editing" winner auto={false} />
export const EditingNoWinner = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} phase="editing" winner={{ name: 'Feeney, Emmerich and Sauer', price: 7000, url: '#' }} price={10000}  />

export const NoChanges = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} phase="editing" alert="noChanges" />
export const InvalidValue = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} phase="editing" alert="invalidAuto" />
export const MaxTooLow = () =>  <Presentation {...mocks.STATE} actions={mocks.ACTIONS} phase="editing" alert="maxTooLow"  />