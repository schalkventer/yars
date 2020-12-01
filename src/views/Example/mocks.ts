import faker from 'faker';
import * as viewTypes from './types';
import { STATUS_KEYS, STOCK_KEYS } from './constants'

export const createPresentationRow = (): viewTypes.Product => {
    const price = faker.random.number({ min: 10, max: 20000 })
  
    return {
      price,
      id: faker.random.uuid(),
      img: 'https://static.knowalot.co.za/products/thumbs/big/PLID17259805.jpg',
      offers: faker.random.number({ min: 0, max: 15 }),
      status: faker.random.arrayElement(STATUS_KEYS),
      stock: faker.random.arrayElement(STOCK_KEYS),
  
      name: faker.random.boolean()
        ? faker.commerce.productName()
        : `${faker.company.companyName()} ${faker.commerce.productName()}`,
  
      winner: faker.random.boolean() || {
        name: faker.company.companyName(),
        price: price + faker.random.number({ min: 50, max: 5000 }),
        url: faker.internet.url(),
      },
  
      auto: faker.random.boolean()
        ? false
        : [faker.random.number({ min: 10, max: 5000 }), faker.random.number({ min: 10000, max: 20000 })],
    }
  }
  