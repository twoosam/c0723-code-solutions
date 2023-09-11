import { readFile } from 'node:fs/promises';

const filenames = process.argv.slice(2);
try {
  const promises = filenames.map(
    async (filename) => await readFile(filename, { encoding: 'utf8' })
  );
  const contents = await Promise.all(promises);
  console.log(contents);
} catch (error) {
  console.log(error);
}
