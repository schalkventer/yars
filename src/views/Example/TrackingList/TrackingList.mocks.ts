import { action } from "@storybook/addon-actions"
import { createAsyncMock } from '@/utilities/createAsyncMock';

import * as types from "./TrackingList.types"
import * as viewTypes from "../types"
import * as mocks from '../mocks';

export const ROWS: viewTypes.Product[] = new Array(50).fill(undefined).map(mocks.createPresentationRow)

export const ACTIONS: types.Actions = {
  changeOptions: createAsyncMock(undefined, 'changeOptions'), 
  showMore: action("showMore"), 
  startLoading: action('startLoading'),
}

export const STATE: types.State = {
  phase: 'resting',
  rows: ROWS,
  hasMore: false,
}
