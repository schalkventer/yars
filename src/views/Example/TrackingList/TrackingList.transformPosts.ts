import {
  GetProductsResponse,
  statusQueryKey,
  stockQueryKey,
} from "@/api/example"
import * as viewTypes from "../types"

const STATUS_QUERY_KEY_MAP: Record<statusQueryKey, viewTypes.statusKey> = {
  Active: "active",
  Disabled: "disabled",
  Inactive: "inactive",
  Archived: "archived",
}

const STOCK_QUERY_KEY_MAP: Record<stockQueryKey, viewTypes.stockKey> = {
  low_stock: "lowStock",
  sufficient_stock: "sufficientStock",
  out_of_stock: "outOfStock",
}

/**
 * @name transformPosts
 *
 * @description TODO: Add description
 */
export const transformResponse = (
  response: GetProductsResponse
): { rows: viewTypes.Product[]; hasMore: boolean } => {
  const hasMore = !!response.next

  const rows = response.results.map(
    (item): viewTypes.Product => ({
      id: item.product_id,
      img: `https://static.knowalot.co.za/products/thumbs/big/${item.product_id}.jpg`,
      name: item.title,
      offers: item.buybox_offer_count,
      price: item.price,
      status: STATUS_QUERY_KEY_MAP[item.status],
      stock: STOCK_QUERY_KEY_MAP[item.stock_status],
      auto: !!item.buybox_auto_price_enabled && [
        item.buybox_auto_price_min,
        item.buybox_auto_price_prefer,
      ],

      winner: !!item.winning_buybox || {
        name: item.buybox_winner_name,
        price: item.buybox_selling_price,
        url: item.takealot_url,
      },
    })
  )

  return {
    rows,
    hasMore,
  }
}
