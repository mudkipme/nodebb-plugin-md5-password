const crypto = require('crypto');

const Md5Password = {
    hookCompare() {
        const Password = module.parent.require('./password');
        const originalCompare = Password.compare;

        Password.compare = function compare(password, hash, callback) {
            originalCompare(password, hash, function (err, passwordMatch) {
                if (err || passwordMatch) {
                    return callback(err, passwordMatch);
                }
                const md5 = crypto.createHash('md5').update(password).digest('hex').toString();
                originalCompare(md5, hash, callback);
            });
        };
    }
};

module.exports = Md5Password;