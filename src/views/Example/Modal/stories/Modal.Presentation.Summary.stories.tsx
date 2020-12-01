import React from 'react';
import { Summary } from '../Modal.Presentation.Summary';
import * as mocks from '../Modal.mocks';

export default {
  title: 'views/Example/Modal/Modal.Presentation.Summary',
  component: Summary,
}

export const Default = () =>  <Summary offers={10} status="active" stock="outOfStock" />
