import * as types from './example.types';
import axios from 'axios';

/**
 * @name createApi
 *
 * @description TODO Add description
 */
export const createApi = (): types.Api => ({
    getPosts: async () => {
        try {
            const { data } = await axios.get<types.Post[]>('https://jsonplaceholder.typicode.com/posts');
            return data;
        } catch (error) {
            return error;
        }
    }
})

export default createApi;