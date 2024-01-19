export interface DelLockDependenciesArg {
    dependencies: string[]
}

export type DelDependenciesParams = DelLockDependenciesArg & {
    path: string
}