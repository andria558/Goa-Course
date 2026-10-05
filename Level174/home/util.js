const { callbackify } = require('util');

async function fn() {
  return 'hello world';
}
const callbackFunction = callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
