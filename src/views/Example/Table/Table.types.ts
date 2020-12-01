import * as viewTypes from '../types';

/**
 * @name size
 *
 * @description TODO Add description
 */
export type size = 's' | 'm' | 'l';

export interface Props {
  phase: viewTypes.phase,
  rows: viewTypes.Product[],
  onTriggerModal: (id: string) => void;
}