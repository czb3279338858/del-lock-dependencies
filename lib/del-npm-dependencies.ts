import { DelDependenciesParams } from "./type";
const fs = require('fs')

export default function delNpmDependencies(arg: DelDependenciesParams) {
    let dependencies = [...arg.dependencies]
    const path = arg.path
    const lockJson = fs.readFileSync(path, 'utf-8')
    const lockObj = JSON.parse(lockJson)

    dependencies.forEach(d => {
        const key = `node_modules/${d}`
        if (lockObj.packages[key]) delete lockObj.packages[key]
    })
    if (lockObj.dependencies) {
        dependencies.forEach(d => {
            if (lockObj.dependencies[d]) {
                delete lockObj.dependencies[d]
            }
        })
    }

    fs.writeFileSync(path, JSON.stringify(lockObj, null, 2))
}