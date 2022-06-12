import { Transform, pipeline } from 'stream';
import { EOL } from 'os';

export const transform = async () => {
  const revert = new Transform ({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().replace(EOL,'').split('').reverse().join('') + EOL);
    }
  });
  process.stdin.pipe(revert).pipe(process.stdout);
  console.log('Write to me, pls!')
};

transform();