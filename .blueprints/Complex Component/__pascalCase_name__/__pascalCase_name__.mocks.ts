import { action } from "@storybook/addon-actions"
import faker from 'faker';
import * as types from "./{{pascalCase name}}.types"

export const POSTS: types.Post[] = new Array(50).fill(undefined).map(() => ({
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    body: faker.lorem.paragraphs(),
    selected: false,
}))

export const ACTIONS: types.Actions = {
  updatePosts: action("updatePosts"),
  toggleSelect: action("toggleSelect"),
}

export const STATE: types.State = {
  phase: 'resting',
  posts: POSTS,
}
