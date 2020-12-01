import * as viewTypes from "./types"
import { zipObject } from "lodash"

/**
 * Status values
 */

export const STATUS_KEYS: viewTypes.statusKey[] = [
  "active",
  "inactive",
  "disabled",
  "archived",
]

export const STATUS_NAMES: viewTypes.statusName[] = [
  "Active",
  "Inactive",
  "Disabled",
  "Archived",
]

export const STATUS_KEY_NAME_MAP = zipObject(STATUS_KEYS, STATUS_NAMES)

/**
 * Stock values
 */

export const STOCK_KEYS: viewTypes.stockKey[] = [
  "sufficientStock",
  "lowStock",
  "outOfStock",
]

export const STOCK_NAMES: viewTypes.stockName[] = [
  "Sufficient Stock",
  "Low Stock",
  "Out of Stock",
]

export const STOCK_KEY_NAME_MAP = zipObject(STOCK_KEYS, STOCK_NAMES)

/**
 * Columns
 */

export const COLUMN_KEYS: viewTypes.columnKey[] = [
  "productTitle",
  "winner",
  "myPrice",
  "offers",
  "status",
  "stock",
  "autoPricing",
]

export const COLUMN_NAMES: viewTypes.columnName[] = [
  "Product Title",
  "Winner",
  "My Price",
  "Offers",
  "Status",
  "Stock",
  "Auto Pricing",
]

export const COLUMN_KEY_NAME_MAP = zipObject(COLUMN_KEYS, COLUMN_NAMES)
