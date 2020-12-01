import React from 'react';
import { Pricing } from '../Modal.Presentation.Pricing';
import * as mocks from '../Modal.mocks';

export default {
  title: 'views/Example/Modal/Modal.Presentation.Pricing',
  component: Pricing,
}

export const Default = () =>  <Pricing auto={false} price={1000} phase="resting" />
export const HasValue = () =>  <Pricing auto={[500, 2000]} price={1000} phase="resting" />
export const Editing = () =>  <Pricing auto={false} price={1000} phase="editing" />
export const EidtingHasValue = () =>  <Pricing auto={[500, 2000]} price={1000} phase="editing" />