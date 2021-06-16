import faker from 'faker';
import * as types from '../example.types'
import { createAsyncMock } from '../../../utilities/createAsyncMock'

export const POST_RESPONSE: types.getPostResponse = new Array(50).fill(undefined).map((): types.Post => ({
    id: faker.random.number(),
    userId: faker.random.number(),
    title: faker.commerce.productName(),
    body: faker.lorem.paragraphs(),
}))

export const API: types.Api = {
    getPosts: createAsyncMock<types.getPostResponse>(POST_RESPONSE)
}