import { writeFile } from 'node:fs/promises';
const inputs = process.argv[2];
try {
  const contents = await writeFile('note.txt', `${inputs} \n`);
  console.log(contents);
} catch (error) {
  console.log(error);
}
