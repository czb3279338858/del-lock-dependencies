import { DelLockDependenciesArg } from "./type";
const fs = require('fs')

export default function removeNpmLock(arg: DelLockDependenciesArg) {
    const dependencies = [...arg.dependencies]
    const f = fs.readFileSync('package-lock.json', 'utf-8')
    const obj = JSON.parse(f)
    const dependenciesObj = { ...obj.dependencies }
    for (const key in dependenciesObj) {
        const dependenciesIndex = dependencies.indexOf(key)
        if (dependenciesIndex > -1) {
            dependencies.splice(dependenciesIndex, 1)
            delete dependenciesObj[key]
        }
        if (!dependencies.length) break
    }
    obj.dependencies = dependenciesObj
    fs.writeFileSync('package-lock.json', JSON.stringify(obj, null, 2))
}