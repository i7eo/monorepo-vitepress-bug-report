import { toString } from './base'

export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isUndefined = (val: any): val is undefined =>
  toString(val) === '[object Undefined]'
export const isNull = (val: any): val is null =>
  toString(val) === '[object Null]'
export const isRegExp = (val: any): val is RegExp =>
  toString(val) === '[object RegExp]'

export const isWindow = (val: any): boolean =>
  // @ts-ignore
  typeof window !== 'undefined' && toString(val) === '[object Window]'

// @ts-ignore
export const isBrowser = typeof window !== 'undefined'

export { isObject } from 'radash'
