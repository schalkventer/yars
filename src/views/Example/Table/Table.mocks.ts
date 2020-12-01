import faker from 'faker'
import * as types from './Table.types';
import * as viewTypes from '../types';
import { createPresentationRow } from '../mocks'

export const SINGLE_ROW: viewTypes.Product = createPresentationRow();
export const LIST_OF_ROWS: viewTypes.Product[] = new Array(100).fill(undefined).map(createPresentationRow);

export const STATE: types.State = {
  phase: 'resting',
  rows: LIST_OF_ROWS,
}

export const ACTIONS: types.Actions = {}