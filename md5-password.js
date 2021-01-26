const crypto = require('crypto');

const Md5Password = {
    hookCompare() {
        const Password = require.main.require('./src/password');
        const originalCompare = Password.compare;

        Password.compare = async function compare(password, hash, shaWrapped) {
            const result = await originalCompare(password, hash, shaWrapped);
            if (result) {
                return result;
            }
            const md5 = crypto.createHash('md5').update(password).digest('hex').toString();
            return await originalCompare(md5, hash, shaWrapped);
        };
    }
};

module.exports = Md5Password;