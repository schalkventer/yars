import * as types from '../types/Complex.types'
import { useOne } from './Complex.useOne'
import { useTwo } from './Complex.useTwo'


export const useComplex = (): [types.State, types.Actions] => {
    const one = useOne();
    const two = useTwo();
    return [{ one: one[0], two: two[0] }, { one: 1[0], two: two[1] }]
}

export default useComplex

