import * as viewTypes from "../types"

export const COLUMN_KEY_WIDTH_MAP: Record<viewTypes.columnKey, number> = {
  productTitle: 15,
  winner: 15,
  myPrice: 8,
  offers: 5,
  status: 5,
  stock: 5,
  autoPricing: 12.5,
}

export const COLUMN_KEY_PADDING_MAP: Record<viewTypes.columnKey, number> = {
  productTitle: 2,
  winner: 0,
  myPrice: 1.5,
  offers: 0,
  status: 0,
  stock: 0,
  autoPricing: 1.5,
}

export const COLUMN_KEY_TOOLTIP_MAP: Record<viewTypes.columnKey, string> = {
  autoPricing: 'Consequat duis labore eu nisi. Do qui aliquip anim ut excepteur aute sunt sint velit. Mollit quis culpa cillum irure proident. Sunt do pariatur cupidatat nostrud fugiat aliquip ipsum mollit eu minim qui in minim. Et aute ullamco laboris tempor ea eu.',

  myPrice: 'Consequat duis labore eu nisi. Do qui aliquip anim ut excepteur aute sunt sint velit. Mollit quis culpa cillum irure proident. Sunt do pariatur cupidatat nostrud fugiat aliquip ipsum mollit eu minim qui in minim. Et aute ullamco laboris tempor ea eu.',

  offers: 'Consequat duis labore eu nisi. Do qui aliquip anim ut excepteur aute sunt sint velit. Mollit quis culpa cillum irure proident. Sunt do pariatur cupidatat nostrud fugiat aliquip ipsum mollit eu minim qui in minim. Et aute ullamco laboris tempor ea eu.',

  productTitle: 'Consequat duis labore eu nisi. Do qui aliquip anim ut excepteur aute sunt sint velit. Mollit quis culpa cillum irure proident. Sunt do pariatur cupidatat nostrud fugiat aliquip ipsum mollit eu minim qui in minim. Et aute ullamco laboris tempor ea eu.',

  status: 'Consequat duis labore eu nisi. Do qui aliquip anim ut excepteur aute sunt sint velit. Mollit quis culpa cillum irure proident. Sunt do pariatur cupidatat nostrud fugiat aliquip ipsum mollit eu minim qui in minim. Et aute ullamco laboris tempor ea eu.',

  stock: 'Consequat duis labore eu nisi. Do qui aliquip anim ut excepteur aute sunt sint velit. Mollit quis culpa cillum irure proident. Sunt do pariatur cupidatat nostrud fugiat aliquip ipsum mollit eu minim qui in minim. Et aute ullamco laboris tempor ea eu.',
  
  winner: 'Consequat duis labore eu nisi. Do qui aliquip anim ut excepteur aute sunt sint velit. Mollit quis culpa cillum irure proident. Sunt do pariatur cupidatat nostrud fugiat aliquip ipsum mollit eu minim qui in minim. Et aute ullamco laboris tempor ea eu.',
}