# del-lock-dependencies
Delete some dependencies in the lock file before installing dependencies in package management tools such as npm.

# Installing
```
npm install del-lock-dependencies -D
```

# Document
1. In the package.json file.

| Params | Default | Options | Explain |
| ---- | ---- | ---- | ---- |
| dependencies | undefined |  | The incoming package name will be removed from the lock file, and multiple package names are supported. |

``` json
{
    "scripts":{
        "preinstall":"npx del-lock-dependencies --dependencies vue vue-router"
    }
}
```
- preinstall：Indicating that a script is executed before dependencies are installed, the behavior is inconsistent between Yarn and npm. Yarn recommends using postinstall and not committing the lock file of the package that needs to be removed.
- postinstall：It indicates that a script is executed after dependencies are installed, and the behavior is inconsistent between Yarn and npm. In npm, the lock file is created after the postinstall.

2. Extend your own methods.
- The parameters are the same as above.

``` js
import delLockDependencies from 'del-lock-dependencies';

delLockDependencies({
    dependencies:['vue','vue-router']
})
```
