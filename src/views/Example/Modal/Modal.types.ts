import * as viewTypes from '../types';

/**
 * @name phase
 *
 * @description TODO Add description
 */
export type phase = 'inactive' | 'resting' | 'editing';

/**
 * @name alertKey
 *
 * @description TODO Add description
 */
export type alertKey = 'invalidAuto' | 'maxTooLow' | 'noChanges';


/**
 * @name 
 *
 * @description TODO Add description
 */
export interface Alert {
    title: string;
    message: string;
}


/**
 * @name State
 *
 * @description TODO: Add description
 */
export interface State extends Omit<viewTypes.Product, 'id'> {
    phase: phase;
    alert: alertKey | null;
}

/**
 * @name Actions
 *
 * @description TODO: Add description
 */
export interface Actions {
    toggleAutoActive: () => void;
    updateMax: (newValue: number) => void;
    updateMin: (newValue: number) => void;
    initEdit: () => void;
    cancelEdit: () => void;
    saveEdit: () => void;
    closeModal: () => void;
}

/**
 * @name Props
 *
 * @description TODO: Add description
 */
export interface Props {
    data: null | viewTypes.Product;
    onUpdateProduct: (newValue: viewTypes.Product) => void;
}
