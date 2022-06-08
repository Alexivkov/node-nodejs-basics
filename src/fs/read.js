import { readFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);


export const read = async () => {
  const filePath = __dirname + '/files/fileToRead.txt';
  try {
    const text = await readFile(filePath, 'utf-8');
    console.log(text);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

read();