import type { Arrayable, Nullable } from './types'

/**
 * Convert `Arrayable<T>` to `Array<T>`
 *
 * @category Array
 */
export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  array = array ?? []
  return Array.isArray(array) ? array : [array]
}

/**
 * Convert `Arrayable<T>` to `Array<T>` and flatten it
 *
 * @category Array
 */
export function flattenArrayable<T>(
  array?: Nullable<Arrayable<T | Array<T>>>,
): Array<T> {
  return toArray(array).flat(1) as Array<T>
}

/**
 * Use rest arguments to merge arrays
 *
 * @category Array
 */
export function mergeArrayable<T>(...args: Nullable<Arrayable<T>>[]): Array<T> {
  return args.flatMap((i) => toArray(i))
}

export type PartitionFilter<T> = (i: T, idx: number, arr: readonly T[]) => any

/**
 * Divide an array into two parts by a filter function
 *
 * @category Array
 * @example const [odd, even] = partition([1, 2, 3, 4], i => i % 2 != 0)
 */
export function partition<T>(
  array: readonly T[],
  f1: PartitionFilter<T>,
): [T[], T[]]
export function partition<T>(
  array: readonly T[],
  f1: PartitionFilter<T>,
  f2: PartitionFilter<T>,
): [T[], T[], T[]]
export function partition<T>(
  array: readonly T[],
  f1: PartitionFilter<T>,
  f2: PartitionFilter<T>,
  f3: PartitionFilter<T>,
): [T[], T[], T[], T[]]
export function partition<T>(
  array: readonly T[],
  f1: PartitionFilter<T>,
  f2: PartitionFilter<T>,
  f3: PartitionFilter<T>,
  f4: PartitionFilter<T>,
): [T[], T[], T[], T[], T[]]
export function partition<T>(
  array: readonly T[],
  f1: PartitionFilter<T>,
  f2: PartitionFilter<T>,
  f3: PartitionFilter<T>,
  f4: PartitionFilter<T>,
  f5: PartitionFilter<T>,
): [T[], T[], T[], T[], T[], T[]]
export function partition<T>(
  array: readonly T[],
  f1: PartitionFilter<T>,
  f2: PartitionFilter<T>,
  f3: PartitionFilter<T>,
  f4: PartitionFilter<T>,
  f5: PartitionFilter<T>,
  f6: PartitionFilter<T>,
): [T[], T[], T[], T[], T[], T[], T[]]
export function partition<T>(
  array: readonly T[],
  ...filters: PartitionFilter<T>[]
): any {
  const result: T[][] = Array.from({ length: filters.length + 1 })
    .fill(null)
    .map(() => [])

  array.forEach((e, idx, arr) => {
    let i = 0
    for (const filter of filters) {
      if (filter(e, idx, arr)) {
        result[i].push(e)
        return
      }
      i += 1
    }
    result[i].push(e)
  })
  return result
}

/**
 * Unique an Array
 *
 * @category Array
 */
export function uniq<T>(array: readonly T[]): T[] {
  return Array.from(new Set(array))
}

/**
 * Unique an Array by a custom equality function
 *
 * @category Array
 */
export function uniqueBy<T>(
  array: readonly T[],
  equalFn: (a: any, b: any) => boolean,
): T[] {
  return array.reduce((acc: T[], cur: any) => {
    const index = acc.findIndex((item: any) => equalFn(cur, item))
    if (index === -1) acc.push(cur)
    return acc
  }, [])
}

/**
 * Remove an item from Array
 *
 * @category Array
 */
export function remove<T>(array: T[], value: T) {
  if (!array) return false
  const index = array.indexOf(value)
  if (index >= 0) {
    array.splice(index, 1)
    return true
  }
  return false
}

/**
 * Get nth item of Array. Negative for backward
 *
 * @category Array
 */
export function at(array: readonly [], index: number): undefined
export function at<T>(array: readonly T[], index: number): T
export function at<T>(array: readonly T[] | [], index: number): T | undefined {
  const len = array.length
  if (!len) return undefined

  if (index < 0) index += len

  return array[index]
}

/**
 * Move element in an Array
 *
 * @category Array
 * @param arr
 * @param from
 * @param to
 */
export function move<T>(arr: T[], from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}
