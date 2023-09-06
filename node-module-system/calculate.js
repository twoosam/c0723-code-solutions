import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

if (process.argv[3] === 'plus') {
  console.log('result:', add(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'minus') {
  console.log('result:', subtract(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'times') {
  console.log('result:', multiply(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'over') {
  console.log('result:', divide(process.argv[2], process.argv[4]));
}
