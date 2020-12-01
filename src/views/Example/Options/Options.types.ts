import * as viewTypes from "../types"
import * as types from "./Options.types"

export type phase = "resting" | "filtering" | "sorting"
export type statusOptions = "all" | viewTypes.statusKey
export type stockOptions = "all" | viewTypes.stockKey

export type StatusObj = Record<statusOptions, boolean>
export type StockObj = Record<stockOptions, boolean>

export interface FiltersWithAll {
  status: StatusObj,
  stock: StockObj
}

export interface SortingWithAll {
  direction: viewTypes.direction,
  column: viewTypes.columnKey,
}

export interface OptionsWithAll {
  search: string;
  filters: FiltersWithAll,
  sorting: SortingWithAll,
}

/**
 * @name State
 *
 * @description TODO: Add description
 */
export interface State {
  phase: phase
  isLoading: boolean
  search: string
  filters: FiltersWithAll,
  sorting: SortingWithAll,
}

/**
 * @name Actions
 *
 * @description TODO: Add description
 */
export interface Actions {
  exportData: null | (() => void)
  updateSearch: (newValue: string) => void
  updateStatus: (newValue: types.statusOptions) => void
  updateStock: (newValue: types.stockOptions) => void
  updateDirection: (newValue: viewTypes.direction) => void
  updateColumn: (newValue: viewTypes.columnKey) => void
  updatePhase: (newValue: phase) => void
}

/**
 * @name Props
 *
 * @description TODO Add description
 */
export interface Props {
  onExport?: null | (() => void)
  onUpdate?: (response: viewTypes.Options) => Promise<void>
}
