export type statusKey = "active" | "inactive" | "disabled" | "archived"
export type stockKey = "sufficientStock" | "lowStock" | "outOfStock"

export type statusName = "Active" | "Inactive" | "Disabled" | "Archived"
export type stockName = "Sufficient Stock" | "Low Stock" | "Out of Stock"

export type direction = "descending" | "ascending"

export type columnKey =
  | "productTitle"
  | "winner"
  | "myPrice"
  | "offers"
  | "status"
  | "stock"
  | "autoPricing"

export type columnName =
  | "Product Title"
  | "Winner"
  | "My Price"
  | "Offers"
  | "Status"
  | "Stock"
  | "Auto Pricing"

/**
 * @name phase
 *
 * @description TODO: Add description
 */
export type phase = 'recreating' | 'adding' | 'resting';

export interface Competitor {
  name: string
  price: number
  url: string
}

export interface Product {
  id: string
  img: string
  name: string
  winner: true | Competitor
  price: number
  offers: number
  status: statusKey
  stock: stockKey
  auto: false | [number, number]
}

export interface Filters {
  status: Record<statusKey, boolean>,
  stock: Record<stockKey, boolean>,
}

export interface Sorting {
  direction: direction
  column: columnKey
}

export interface Options {
  filters: Filters,
  sorting: Sorting,
  search: string,
}

