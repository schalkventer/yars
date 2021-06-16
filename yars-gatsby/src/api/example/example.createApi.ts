import * as types from './example.types';
import axios from 'axios';

/**
 * @name convertQueriesToString
 *
 * @description TODO Add description
 */
const convertQueriesToString = (variables: types.Variables): string => {
    const { descending, sortingColumn, page, search, status, stock_status } = variables;
    
    const statusKeys = Object.keys(status) as types.statusQueryKey[];
    const statusString: string = statusKeys.map(key => status[key] && `status=${key}`).filter(value => !!value).join('&')

    const stockKeys = Object.keys(status) as types.stockQueryKey[];
    const stockString: string = stockKeys.map(key => stock_status[key] && `stock_status=${key}`).filter(value => !!value).join('&')

    const result = [
        `page=${page}`,
        `search=${search}`,
        `ordering=${descending ? '-' : ''}${sortingColumn}`,
        statusString,
        stockString,
        'track_buybox=true',
    ].join('&');

    return result;
}

/**
 * @name createApi
 *
 * @description TODO Add description
 */
export const createApi = (): types.Api => ({
    getProducts: async (variables: types.Variables) => {
        try {
            const queryString = convertQueriesToString(variables);
            const { data } = await axios.get<types.GetProductsResponse>(`https://staging.palmetrics.co.za/api/seller/offers/?${queryString}`,);
            return data;
        } catch (error) {
            return error;
        }
    }
})

export default createApi;
