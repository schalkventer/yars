import { createContext } from 'react';
import * as types from './example.types';

export const context = createContext<types.Api>({
    getProducts: () => { throw new Error('No api Provider value supplied.') },
});

export default context;
