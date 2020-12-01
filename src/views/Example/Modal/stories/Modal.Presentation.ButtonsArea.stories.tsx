import React from 'react';
import { ButtonsArea } from '../Modal.Presentation.ButtonsArea';
import * as mocks from '../Modal.mocks';

export default {
  title: 'views/Example/Modal/Modal.Presentation.ButtonsArea',
  component: ButtonsArea,
}

export const Default = () =>  <ButtonsArea phase="resting" actions={mocks.ACTIONS} />
export const Editing = () =>  <ButtonsArea phase="editing" actions={mocks.ACTIONS} />
