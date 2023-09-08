import { readFile } from 'node:fs/promises';

try {
  const contents = await readFile('./dijkstra.txt', { encoding: 'utf8' });
  console.log(contents);
} catch (error) {
  console.log(error);
}
