import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
  const readStream = createReadStream(__dirname + '/files/archive.gz');
  const writeStream = createWriteStream(__dirname + '/files/fileToCompress.txt');
  const fromGz = createUnzip();
  readStream.pipe(fromGz).pipe(writeStream);
  console.log('Archive unzipped!');
};

decompress();