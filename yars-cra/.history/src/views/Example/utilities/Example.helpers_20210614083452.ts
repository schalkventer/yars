export const createMap = <key extends unknown, value extends unknown>(source: [key: any, value: any][]) => {
    const map = new Map(source)

    return {
        get: (key: key) => value
    }
}