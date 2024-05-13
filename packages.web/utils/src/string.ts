/**
 * Replace backslash to slash
 *
 * @category String
 */
export function slash(str: string) {
  // eslint-disable-next-line unicorn/prefer-string-replace-all
  return str.replace(/\\/g, '/')
}

/**
 * Ensure prefix of a string
 *
 * @category String
 */
export function ensurePrefix(prefix: string, str: string) {
  if (!str.startsWith(prefix)) return prefix + str
  return str
}

/**
 * Ensure suffix of a string
 *
 * @category String
 */
export function ensureSuffix(suffix: string, str: string) {
  if (!str.endsWith(suffix)) return str + suffix
  return str
}

// port from nanoid
// https://github.com/ai/nanoid
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
/**
 * Generate a random string
 * @category String
 */
export function randomStr(size = 16, dict = urlAlphabet) {
  let id = ''
  let i = size
  const len = dict.length
  // eslint-disable-next-line unicorn/prefer-math-trunc
  while (i--) id += dict[(Math.random() * len) | 0]
  return id
}
