import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
  const readStream = createReadStream(__dirname + '/files/fileToCompress.txt');
  const writeStream = createWriteStream(__dirname + '/files/archive.gz');
  const toGz = createGzip();
  readStream.pipe(toGz).pipe(writeStream);
  console.log('file archived');
};

compress();