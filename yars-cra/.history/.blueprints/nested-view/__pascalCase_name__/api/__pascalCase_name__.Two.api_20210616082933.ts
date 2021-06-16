import * as types from '../types/{{pascalCase name}}.{{ $TwoPascal }}.types'

const LOCAL_STORAGE_UUID = 'a4c868bc-b0cd-431c-9d5f-313cb3deb68b'

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