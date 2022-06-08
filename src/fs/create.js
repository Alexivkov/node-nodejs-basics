import { writeFile } from 'fs/promises';
import { getPathFromFiles } from './getPathFromFiles.js';

export const create = async () => {
  const src = getPathFromFiles(import.meta.url, 'fresh.txt')
  const fileText = 'I am fresh and young';

  try {
    await writeFile(src, fileText, {flag: 'wx'});
  } catch (err) {
    throw new Error('FS operation failed'); 
  }
};

create();