# waterline-issue-1301

Steps to Create Sails App:
* sails new waterline-issue-1301
* cd waterline-issue-1301
* npm install sails-mongo --save
* sails generate model user
* modified config/connections.js to add mongo db connection
* modified api/modules/User.js to set connectio and add 2 attributes (id, roles : [])
* modified config/bootstrap.js to create a new user on lift
* sails lift

## Result of Sails Lift

```
/home/**/WEBPROJECTS/tests/waterline-issue-1301/api/models/User.js:20
      notNull: true // Can't Use Not Null on Array Argument
      ^^^^^^^

SyntaxError: Unexpected identifier
    at exports.runInThisContext (vm.js:53:16)
    at Module._compile (module.js:414:25)
    at Object.Module._extensions..js (module.js:442:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:313:12)
    at Module.require (module.js:366:17)
    at require (module.js:385:17)
    at /home/**/.nvm/versions/node/v4.2.4/lib/node_modules/sails/node_modules/include-all/index.js:129:29
    at Array.forEach (native)
    at requireAll (/home/**/.nvm/versions/node/v4.2.4/lib/node_modules/sails/node_modules/include-all/index.js:44:9)
    at buildDictionary (/home/**/.nvm/versions/node/v4.2.4/lib/node_modules/sails/node_modules/sails-build-dictionary/index.js:68:14)
    at Function.module.exports.optional (/home/**/.nvm/versions/node/v4.2.4/lib/node_modules/sails/node_modules/sails-build-dictionary/index.js:160:9)
    at Hook.loadModels (/home/**/.nvm/versions/node/v4.2.4/lib/node_modules/sails/lib/hooks/moduleloader/index.js:279:23)
    at Hook.bound [as loadModels] (/home/**/.nvm/versions/node/v4.2.4/lib/node_modules/sails/node_modules/lodash/dist/lodash.js:729:21)
    at Array.async.auto.models (/home/**/.nvm/versions/node/v4.2.4/lib/node_modules/sails/lib/hooks/orm/load-user-modules.js:23:23)
    at /home/**/.nvm/versions/node/v4.2.4/lib/node_modules/sails/node_modules/async/lib/async.js:484:38
```
