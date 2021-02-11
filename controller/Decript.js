const crypto = require('crypto');

function Decript(hash) {

    const algorithm = 'aes-256-ctr';
    const secretKey = 'IciAyUASFf7ZIFQ8Twhn9SGNiLfg9cE3';

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();

}


export default Decript;