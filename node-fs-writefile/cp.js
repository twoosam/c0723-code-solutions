import { readFile, writeFile } from 'node:fs/promises';

try {
  const original = await readFile(process.argv[2], 'utf8');
  const copy = await writeFile(process.argv[3], `${original} \n`);
  console.log(copy);
} catch (error) {
  console.log(error);
}
