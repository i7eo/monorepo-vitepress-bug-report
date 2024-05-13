import { expect, it } from 'vitest'
import { capitalize, ensurePrefix, ensureSuffix, slash } from '../src/string'

it('slash', () => {
  expect(slash('\\123')).toEqual('/123')
  expect(slash('\\\\')).toEqual('//')
  expect(slash('\\h\\i')).toEqual('/h/i')
})

it('ensurePrefix', () => {
  expect(ensurePrefix('abc', 'abcdef')).toEqual('abcdef')
  expect(ensurePrefix('hi ', 'jack')).toEqual('hi jack')
})

it('ensureSuffix', () => {
  expect(ensureSuffix('world', 'hello ')).toEqual('hello world')
  expect(ensureSuffix('123', 'abc123')).toEqual('abc123')
})

it('capitalize', () => {
  expect(capitalize('hello World')).toEqual('Hello world')
  expect(capitalize('123')).toEqual('123')
  expect(capitalize('中国')).toEqual('中国')
  expect(capitalize('āÁĂÀ')).toEqual('Āáăà')
  expect(capitalize('a')).toEqual('A')
})
