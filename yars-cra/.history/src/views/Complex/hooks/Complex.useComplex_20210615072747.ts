import * as types from '../types/Complex.types'
import { useOne } from './Complex.useOne'
import { useTwo } from './Complex.useTwo'


export const useComplex = (): [types.State, types.Actions] => {
    const one = useOne();
    const two = useTwo();
    return { one, two }
}

export default useComplex

