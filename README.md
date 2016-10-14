# Password Genie

Module designed for easily creating and checking sha256 hashed passwords. 

## Example

The following example shows how you can check a password:

```js
var genie = require('password-genie');

var passwordToCheck = 'MYPASSWORD';
var databaseHash = '655bdbd8f1331c67c11609973479117951fb56e7c86b69c30048fda8241c92fb';
var databaseSalt = '49f38160cb3e9708';

if(genie.checkPassword(passwordToCheck, databaseHash, databaseSalt)){
    console.log('Password matched.);
}else{
    console.log('Password did not match');
}
```

The following example shows you how to hash a password:

```js
var genie = require('password-genie');

var passwordToHash = 'MYPASSWORD';

var hashedPassword = genie.hashPassword(passwordToHash)

console.log(hashedPassword.hash); //655bdbd8f1331c67c11609973479117951fb56e7c86b69c30048fda8241c92fb
console.log(hashedPassword.salt); //49f38160cb3e9708



```



## Built With

* crypto.js


## Authors

* **Sam Munroe**

## License

This project is licensed under the MIT License