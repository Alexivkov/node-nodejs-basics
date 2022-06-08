import { copyFile, mkdir, readdir } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

export const copy = async () => {
  const sourcePath = __dirname + '/files';
  const destinationPath = __dirname + '/files_copy';

  try {
    console.log(sourcePath);
    await mkdir(destinationPath);
    const dirFiles = await readdir(sourcePath);
    await Promise.all(dirFiles.map(file => copyFile(`${sourcePath}/${file}`, `${destinationPath}/${file}`)))
  } catch(error) {
    console.log(error);
    console.log(error.stack);

  }
};

copy();