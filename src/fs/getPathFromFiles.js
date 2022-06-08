import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const getPathFromFiles = (url, filename) => {
  const __fileName = fileURLToPath(url);
  const __dirname = dirname(__fileName);
  const filePath = join(__dirname, 'files', filename);
  return filePath;
};