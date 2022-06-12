import { createReadStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const readStream = createReadStream(__dirname + '/files/fileToRead.txt', 'utf-8');
  readStream.pipe(process.stdout);
};

read();