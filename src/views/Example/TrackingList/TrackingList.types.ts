import * as viewTypes from '../types';

/**
 * @name State
 *
 * @description TODO: Add description
 */
export interface State {
  rows: viewTypes.Product[],
  modal: null | viewTypes.Product;
  hasMore: boolean;
  phase: 'recreating' | 'adding' | 'resting';
}

/**
 * @name Actions
 *
 * @description TODO: Add description
 */
export interface Actions {
  showMore: () => void;
  openModal: (id: string) => void;
  changeOptions: (newValues: viewTypes.Options) => Promise<void>;
}

/**
 * @name Props
 *
 * @description TODO: Add description
 */
export interface Props {}