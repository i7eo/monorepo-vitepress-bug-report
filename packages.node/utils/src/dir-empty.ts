import fs, { promises as fsPromises } from 'node:fs'

export async function dirEmpty(path: string, ignoreList?: string[]) {
  try {
    const dirFiles = await fsPromises.readdir(path)
    const result = dirFiles && dirFiles.length > 0

    if (!ignoreList) {
      return !result
    } else {
      return !(
        result &&
        dirFiles.filter((fileName) => !ignoreList.includes(fileName)).length > 0
      )
    }
  } catch (error) {
    return true
  }
}

export function dirEmptySync(path: string, ignoreList?: string[]) {
  try {
    const dirFiles = fs.readdirSync(path)
    const result = dirFiles && dirFiles.length > 0

    if (!ignoreList) {
      return !result
    } else {
      return !(
        result &&
        dirFiles.filter((fileName) => !ignoreList.includes(fileName)).length > 0
      )
    }
  } catch (error) {
    return true
  }
}
