const os = require('os');
const prompt = require('prompt-sync')();

let comand = '';

while (comand !== 'exit') {

  comand = prompt("  'type?' | 'arch?' | 'uptime?' => ")

  if (comand === 'type') {
    console.log(os.type())
  } else if (comand === 'arch') {
    console.log(os.arch())
  } else if (comand === 'uptime') {
    console.log(os.uptime())
  } else if (comand === 'exit') {
    console.log('Bye@')
  } else {
    console.log('unknown command');
  }
}
