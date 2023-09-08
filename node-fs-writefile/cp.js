import { readFile, writeFile } from 'node:fs/promises';

try {
  const original = await readFile(process.argv[2]);
  const copy = await writeFile(process.argv[3], `${original}`);
  console.log(copy);
} catch (error) {
  console.log(error);
}
