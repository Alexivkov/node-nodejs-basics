import { spawn } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
  const chProcess = spawn('node', ['--version']);
  chProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  })
};

spawnChildProcess();