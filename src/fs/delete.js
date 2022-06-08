import { rm } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

export const remove = async () => {
  const src = __dirname + '/files/fileToRemove.txt';
  try {
    await rm(src);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

remove();