const crypto = require('crypto');

function Encript(text) {

    const algorithm = 'aes-256-ctr';
    const secretKey = 'IciAyUASFf7ZIFQ8Twhn9SGNiLfg9cE3';
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    const dataRet = {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };

    return dataRet;

}


export default Encript;