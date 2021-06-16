export interface Product {
  offer_id: number
  title: string
  status: "Active" | "Disabled" | "Inactive" | "Archived"
  recommended_retail_price: number
  price: number
  product_id: string
  tsin: string
  gtin: string
  sku: string
  mp_barcode: string
  takealot_url: string
  total_stock_available: number
  stock_status: "low_stock" | "sufficient_stock" | "out_of_stock"
  stock_available_cpt: number
  stock_available_jhb: number
  leadtime_stock: number
  leadtime_days: null
  track_buybox: boolean
  winning_buybox: boolean
  buybox_winner_id: string
  buybox_winner_name: string
  buybox_offer_count: number
  buybox_selling_price: number
  buybox_star_rating: number
  buybox_last_updated: string
  sales_revenue_total: number
  sales_revenue_one_year: number
  sales_revenue_one_month: number
  buybox_auto_price_enabled: boolean
  buybox_auto_price_min: number
  buybox_auto_price_prefer: number
}

export type columnKey = 'title' |
'price' |
'status' |
'stock_status' |
'stock_available_cpt' |
'stock_available_jhb' |
'leadtime_stock' |
'total_stock_available' |
'leadtime_days' |
'offer_id' |
'product_id' |
'sku' |
'sales_revenue_total' |
'sales_revenue_one_year' |
'sales_revenue_one_month' |
'buybox_auto_price_enabled' |
'buybox_auto_price_min' |
'buybox_auto_price_prefer' |
'buybox_winner_name' |
'buybox_selling_price' |
'buybox_last_updated' |
'buybox_offer_count'

export type statusQueryKey = 'Active' | 'Inactive' | 'Disabled' | 'Archived';
export type stockQueryKey = 'sufficient_stock' | 'low_stock' | 'out_of_stock';

export interface Variables {
  page: number
  descending: boolean
  search: string
  status: Record<statusQueryKey, boolean>
  stock_status: Record<stockQueryKey, boolean>
  sortingColumn: columnKey,
}

export interface GetProductsResponse {
  count: number;
  next: string;
  previous: string;
  results: Product[];
}

export type getProducts = (variables: Variables) => Promise<GetProductsResponse | Error>

export interface Api {
  getProducts: getProducts
}
