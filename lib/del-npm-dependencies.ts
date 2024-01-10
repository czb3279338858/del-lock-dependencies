import { DelLockDependenciesArg } from "./type";
const fs = require('fs')

export default function delNpmDependencies(arg: DelLockDependenciesArg) {
    const dependencies = [...arg.dependencies]
    const lockJson = fs.readFileSync('package-lock.json', 'utf-8')
    const lockObj = JSON.parse(lockJson)
    const dependenciesObj = { ...lockObj.dependencies }
    for (const key in dependenciesObj) {
        const dependenciesIndex = dependencies.indexOf(key)
        if (dependenciesIndex > -1) {
            dependencies.splice(dependenciesIndex, 1)
            delete dependenciesObj[key]
        }
        if (!dependencies.length) break
    }
    lockObj.dependencies = dependenciesObj
    fs.writeFileSync('package-lock.json', JSON.stringify(lockObj, null, 2))
}