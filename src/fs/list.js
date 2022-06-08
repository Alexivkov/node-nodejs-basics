import { readdir } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

export const list = async () => {
  const src = __dirname + '/files';
  try {
    const files = await readdir(src);
    files.forEach(file => console.log(file));
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

list();