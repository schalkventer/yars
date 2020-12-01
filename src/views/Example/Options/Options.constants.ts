import * as types from './Options.types'

/**
 * @name INITIAL_STATE
 *
 * @description The state of the Container component when it is mounted.
 */
export const INITIAL_STATE: types.State = {
    phase: 'resting',
    isLoading: false,
    search: '',
    filters: {
        status: {
            all: true,
            active: false,
            archived: false,
            disabled: false,
            inactive: false,
        },
        stock: {
            all: true,
            lowStock: false,
            outOfStock: false,
            sufficientStock: false,
        },
    },
    sorting: {
        column: 'productTitle',
        direction: 'descending',
    }
}