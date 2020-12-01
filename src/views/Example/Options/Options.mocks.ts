import { action } from '@storybook/addon-actions';
import * as types from './Options.types';

export const STATUS_OBJ: types.StatusObj = {
    all: true,
    active: false,
    archived: false,
    disabled: false,
    inactive: false,
}

export const STOCK_OBJ: types.StockObj = {
    all: true,
    lowStock: false,
    outOfStock: false,
    sufficientStock: false,
}

export const FILTERS: types.FiltersWithAll = {
    stock: STOCK_OBJ,
    status: STATUS_OBJ,
}

export const SORTING: types.SortingWithAll = {
    column: 'productTitle',
    direction: 'descending',
}

export const STATE: types.State = {
    search: '',
    isLoading: false,
    phase: 'resting',
    filters: FILTERS,
    sorting: SORTING,
}

export const ACTIONS: types.Actions = {
    exportData: action('exportData'),
    updatePhase: action('updatePhase'),
    updateColumn: action('updateColumn'),
    updateDirection: action('updateDirection'),
    updateSearch: action('updateSearch'),
    updateStatus: action('updateStatus'),
    updateStock: action('updateStock'),
}