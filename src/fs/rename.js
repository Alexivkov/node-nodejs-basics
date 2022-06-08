import { rename as makeNewName } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

export const rename = async () => {
  const properPathName = __dirname + '/files/properFilename.md';
  const wrongPathName = __dirname + '/files/wrongFilename.txt';
  try {
    console.log(wrongPathName)
    await makeNewName(wrongPathName, properPathName);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

rename();