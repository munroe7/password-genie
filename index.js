var crypto = require('crypto');
var methods = exports;

var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
        .toString('hex') /** convert to hexadecimal format */
        .slice(0,length);   /** return required number of characters */
};

methods.checkPassword = function (password, databasePassword, salt){
    var hash = crypto.createHmac('sha256', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    if(value == databasePassword){
        return true;
    }else{
        return false;
    }
};

methods.hashPassword = function (userpassword){
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var hash = crypto.createHmac('sha256', salt); /** Hashing algorithm md5 */
    hash.update(userpassword);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

// console.log(methods.hashPassword('MYPASSWORD'));
// console.log(methods.checkPassword('MYPASSWORD', '655bdbd8f1331c67c11609973479117951fb56e7c86b69c30048fda8241c92fb', '49f38160cb3e9708'));
