import faker from 'faker';
import * as types from './example.types'
import { createAsyncMock } from '@/utilities/createAsyncMock'

export const createProduct = (): types.Product => ({
    offer_id: faker.random.number(),
    status: faker.random.arrayElement(['Active', 'Disabled', 'Inactive', 'Archived']),
    recommended_retail_price: faker.random.number(),
    price: faker.random.number(),
    product_id: faker.random.uuid(),
    tsin: faker.random.uuid(),
    gtin: faker.random.uuid(),
    sku: faker.random.uuid(),
    mp_barcode: faker.random.uuid(),
    takealot_url: faker.internet.url(),
    total_stock_available: faker.random.number(),
    stock_status: faker.random.arrayElement(['low_stock', 'sufficient_stock', 'out_of_stock']),
    stock_available_cpt: faker.random.number(),
    stock_available_jhb: faker.random.number(),
    leadtime_stock: faker.random.number(),
    leadtime_days: null,
    track_buybox: faker.random.boolean(),
    winning_buybox: faker.random.boolean(),
    buybox_winner_id: faker.random.uuid(),
    buybox_winner_name: faker.company.companyName(),
    buybox_offer_count: faker.random.number({ min: 1, max: 30 }),
    buybox_selling_price: faker.random.number(),
    buybox_star_rating: faker.random.number(),
    buybox_last_updated: faker.date.recent().toISOString(),
    sales_revenue_total: faker.random.number(),
    sales_revenue_one_year: faker.random.number(),
    sales_revenue_one_month: faker.random.number(),
    buybox_auto_price_enabled: faker.random.boolean(),
    buybox_auto_price_min: faker.random.number(),
    buybox_auto_price_prefer: faker.random.number(),
  
    title: faker.random.boolean()
      ? faker.commerce.productName()
      : `${faker.company.companyName()} ${faker.commerce.productName()}`,
  })

export const PRODUCTS_RESPONSE: types.GetProductsResponse = {
    count: faker.random.number({ min: 200, max: 20000 }),
    next: faker.internet.url(),
    previous: faker.internet.url(),
    results: new Array(50).fill(undefined).map(createProduct),
}

export const API: types.Api = {
    getProducts: createAsyncMock<types.GetProductsResponse>(PRODUCTS_RESPONSE)
}