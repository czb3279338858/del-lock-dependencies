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
- postinstall在yarn和npm中表现不一致，npm中在postinstall后才创建锁文件。这句话翻译成英文

2. Extend your own methods.
- The parameters are the same as above.

``` js
import delLockDependencies from 'del-lock-dependencies';

delLockDependencies({
    dependencies:['vue','vue-router']
})
```
