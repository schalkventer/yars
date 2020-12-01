import React from 'react';
import { Winner } from '../Modal.Presentation.Winner';
import * as mocks from '../Modal.mocks';

export default {
  title: 'views/Example/Modal/Modal.Presentation.Winner',
  component: Winner,
}

export const Default = () =>  <Winner winner price={12000}  />
export const Competitor = () =>  <Winner winner={{ name: 'Ryan, Morar and MacGyver', price: 10000, url: '#'  }} price={12000} />
