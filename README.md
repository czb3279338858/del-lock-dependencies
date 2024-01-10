# del-lock-dependencies
Delete some dependencies in the lock file before installing dependencies in package management tools such as npm.

# Installing
```
npm install del-npm-dependencies -D
```

# Document
1. In the package.json file.

| Params | Default | Options | Explain |
| ---- | ---- | ---- | ---- |
| type | npm | yarn、npm | The package in the corresponding management tool lock file will be deleted based on this parameter. |
| dependencies | undefined |  | The incoming package name will be removed from the lock file, and multiple package names are supported. |

``` json
{
    "scripts":{
        "preinstall":"npx del-lock-dependencies --type yarn --dependencies vue vue-router"
    }
}
```

2. Extend your own methods.
- The parameters are the same as above.

``` js
import delLockDependencies from 'del-lock-dependencies';

delLockDependencies({
    type:'npm',
    dependencies:['vue','vue-router']
})
```
