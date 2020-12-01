import { action } from "@storybook/addon-actions"
import * as types from "./Modal.types"
import { createPresentationRow } from '../mocks';

export const ACTIONS: types.Actions = {
  cancelEdit: action('cancelEdit'),
  initEdit: action('initEdit'),
  saveEdit: action('saveEdit'),
  updateMax: action('updateMax'),
  updateMin: action('updateMin'),
  closeModal: action('closeModal'),
  toggleAutoActive: action('toggleAutoActive'),
}

export const STATE: types.State = {
  ...createPresentationRow(),
  alert: null,
  phase: 'resting',
}

export const PROPS: types.Props = {
  data: createPresentationRow(),
  onUpdateProduct: action('onUpdateProduct'),
}