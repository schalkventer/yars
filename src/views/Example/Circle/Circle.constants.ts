import { tint } from "polished"
import * as viewTypes from "../types"

export const STATUS_KEYS_LETTERS_MAP: Record<viewTypes.statusKey, string> = {
  active: "AC",
  inactive: "I",
  disabled: "D",
  archived: "AR",
}

export const STATUS_KEYS_COLOR_MAP: Record<viewTypes.statusKey, string> = {
  active: tint(0, "#054a05"),
  inactive: tint(0.3, "#054a05"),
  disabled: tint(0.6, "#054a05"),
  archived: tint(0.9, "#054a05"),
}

export const STOCK_LEVEL_LETTERS_MAP: Record<viewTypes.stockKey, string> = {
  sufficientStock: "S",
  lowStock: "L",
  outOfStock: "O",
}

export const STOCK_LEVEL_COLOR_MAP: Record<viewTypes.stockKey, string> = {
  sufficientStock: tint(0, "#a4a4de"),
  lowStock: tint(0.4, "#a4a4de"),
  outOfStock: tint(0.8, "#a4a4de"),
}
