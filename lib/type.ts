export interface DelLockDependenciesArg {
    type: "npm" | "yarn",
    dependencies: string[]
}