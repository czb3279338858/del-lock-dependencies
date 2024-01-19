import { DelDependenciesParams } from "./type";
const fs = require('fs')

export default function delNpmDependencies(arg: DelDependenciesParams) {
    const dependencies = [...arg.dependencies]
    const path = arg.path
    const lockJson = fs.readFileSync(path, 'utf-8')
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
    fs.writeFileSync(path, JSON.stringify(lockObj, null, 2))
}