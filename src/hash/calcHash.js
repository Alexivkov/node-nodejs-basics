import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  try {
    const fileContent = await readFile(__dirname + '/files/fileToCalculateHashFor.txt');
    const hash = createHash('sha256').update(fileContent).digest('hex');
    console.log(`Hash: ${hash}`);
  } catch (error) {
    throw error;
  }
};

calculateHash();