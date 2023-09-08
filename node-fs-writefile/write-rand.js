import { writeFile } from 'node:fs/promises';

const randomNumber = Math.random().toString();
try {
  const promise = await writeFile('random.txt', `${randomNumber} \n`);
  console.log(promise);
} catch (error) {
  console.log(error);
}
