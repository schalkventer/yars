import * as types from '../types/Complex.types'
import { createApi as createControlApi } from './Complex.Control.api'
import { createApi as createDisplayApi } from './Complex.Display.api'

export const createApi = (): types.Api => {
    return {
        readLocal: () => {
            const localString = window.localStorage.getItem(LOCAL_STORAGE_UUID)
            if (!localString) return false;
            return JSON.parse(localString)
        },

        saveLocal: (newValue: boolean) => {
            const localString = JSON.stringify(newValue)            
            window.localStorage.setItem(LOCAL_STORAGE_UUID, localString)
        }
    }
}