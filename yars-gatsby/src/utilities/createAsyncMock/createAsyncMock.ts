import { action } from '@storybook/addon-actions';

/**
 * @name createAsyncMock
 *
 * @description TODO Add description
 */
export const createAsyncMock = <T extends unknown>(response: (() => T) | T, name?: string) => (): Promise<T> => new Promise(resolve => {
    if (name) {
        action(`${name}: started`)()
    }

    setTimeout(() => {
        if (name) {
            action(`${name}: resolved`)()
        }

        if (typeof response === 'function') {
            const responseAsFn = response as () => T;
            return responseAsFn();
        }

        resolve(response);
    }, 2000)
})

export default createAsyncMock;