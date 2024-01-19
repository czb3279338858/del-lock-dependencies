import delNpmDependencies from "./del-npm-dependencies";
import delYarnDependencies from "./del-yarn-dependencies";
import { DelLockDependenciesArg } from "./type";

const fs = require('fs')

export default function delLockDependencies(arg: DelLockDependenciesArg) {
    const npmPath = './package-lock.json'
    const yarnPath = './yarn.lock'
    if (fs.existsSync(npmPath)) {
        delNpmDependencies({ ...arg, path: npmPath })
    }
    if (fs.existsSync(yarnPath)) {
        delYarnDependencies({ ...arg, path: yarnPath })
    }
}