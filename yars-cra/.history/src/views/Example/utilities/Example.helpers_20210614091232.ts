/**
 * @name createMap
 *
 * @description TODO Add description
 */
export const createMap = <K extends unknown, V extends unknown>(source: [key: any, value: any][]) => {
    const map = new Map(source)

    return {
        get: (key: K): V => map.get(key)
    }
}