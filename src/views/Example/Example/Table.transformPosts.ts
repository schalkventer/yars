import { getPostResponse } from '@/api/example';
import * as types from './Table.types';

/**
 * @name transformPosts
 *
 * @description TODO: Add description
 */
export const transformPosts = (response: Exclude<getPostResponse, Error>): types.Post[] => {
    return response.map((item) => ({
        id: item.id.toString(), 
        title: item.title,
        body: item.body,
        selected: false,
    }))
}