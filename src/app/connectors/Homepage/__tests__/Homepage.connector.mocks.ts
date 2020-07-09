import faker from 'faker';
// import fakerE from 'faker-enhanced';
import { types } from '..';

/**
 * @name SERVER_SUCCESS_RESPONSE
 *
 * @description See type for description.
 */
export const SERVER_SUCCESS_RESPONSE: types.ServerResponse = {
  status: 200,
  data: {
    example: true,
    id: faker.random.uuid(),
  },
};

/**
 * @name SERVER_FAIL_RESPONSE
 *
 * @description See type for description.
 */
export const SERVER_FAILS_RESPONSE: types.ServerResponse = {
  status: 400,
  data: {
    example: true,
    id: faker.random.uuid(),
  },
};
