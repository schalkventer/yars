/**
 * @name createMap
 *
 * @description TODO Add description
 */
 export const createMap = <K extends string, V extends object>(source: [K, V][]) => {
    const map = new Map(source)
  
    return {
      get: (key: K): V => map.get(key) as V,
    }
  }
  