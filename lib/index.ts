import delNpmDependencies from "./del-npm-dependencies";
import delYarnDependencies from "./del-yarn-dependencies";
import { DelLockDependenciesArg } from "./type";

export default function delLockDependencies(arg: DelLockDependenciesArg) {
    const { type } = arg
    switch (type) {
        case 'npm':
            delNpmDependencies(arg)
            break;
        case 'yarn':
            delYarnDependencies(arg)
            break;
        default:
            break;
    }
}