import { execSync, exec } from 'node:child_process'

export async function appExists(app: string) {
  try {
    await exec(`${app} --version`, {
      cwd: process.cwd(),
    })
    return true
  } catch {
    return false
  }
}

export function appExistsSync(app: string) {
  try {
    execSync(`${app} --version`, {
      cwd: process.cwd(),
    })
    return true
  } catch {
    return false
  }
}
