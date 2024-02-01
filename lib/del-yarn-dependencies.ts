import { DelDependenciesParams } from "./type"
const fs = require('fs')
const lockfile = require('@yarnpkg/lockfile')

export default function delYarnDependencies(arg: DelDependenciesParams) {
    const dependencies = [...arg.dependencies]
    const path = arg.path
    const file = fs.readFileSync(path, 'utf-8')
    const lock = lockfile.parse(file)
    const lockObj = { ...lock.object }
    for (const key in lock.object) {
        const dependenciesIndex = dependencies.findIndex((v) => key.startsWith(`${v}@`))
        if (dependenciesIndex > -1) {
            dependencies.splice(dependenciesIndex, 1)
            delete lockObj[key]
        }
        if (!dependencies.length) break
    }
    fs.writeFileSync(path, lockfile.stringify(lockObj))
}