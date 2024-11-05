import { randomBytes, pbkdf2 } from 'crypto'

export function cryptoPassword(password: string, salt = randomBytes(16).toString('hex'), iterations = 100000, keylen = 64, digest = 'sha512') {
  return new Promise((resolve, reject) => {
    pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
      if (err) {
        reject(err);
      }
      resolve({
        salt,
        derivedKey: derivedKey.toString('hex'),
      });
    });
  });
}