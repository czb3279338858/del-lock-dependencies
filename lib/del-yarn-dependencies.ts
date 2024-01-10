import { DelLockDependenciesArg } from "./type"
const fs = require('fs')
const lockfile = require('@yarnpkg/lockfile')

export default function delYarnDependencies(arg: DelLockDependenciesArg) {
    const dependencies = [...arg.dependencies]
    const file = fs.readFileSync('yarn.lock', 'utf-8')
    const lock = lockfile.parse(file)
    const dependenciesObj = { ...lock.object }
    for (const key in dependenciesObj) {
        const dependenciesIndex = dependencies.findIndex((v) => key.startsWith(`${v}@`))
        if (dependenciesIndex > -1) {
            dependencies.splice(dependenciesIndex, 1)
            delete dependenciesObj[key]
        }
        if (!dependencies.length) break
    }
    fs.writeFileSync('yarn.lock', lockfile.stringify(dependenciesObj))
}