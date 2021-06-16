import * as types from '../types/Nested.One.types'

const LOCAL_STORAGE_UUID = '8036d573-43da-4f75-8ce3-d16ff4c7d6ea'

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