import * as viewTypes from "../types"

export type variant = "winner" | "offers" | "stock" | "status"

export interface Props {
  variant: variant
  value?: viewTypes.statusKey | viewTypes.stockKey | number
  tooltip?: boolean
}
