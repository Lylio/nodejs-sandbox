//Node.js Ultimate Beginner’s Guide in 7 Easy Steps
// https://www.youtube.com/watch?v=ENrzD9HAZK4

const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {

console.log("🍔 yum!")
})

eventEmitter.emit('lunch');


/*
The (err, txt) below is known as a callback function.It will only be called back once the rest of the code runs first.
basically, the compiler will read through the code and output the 'do this ASAP' statement first, and if nothing
went wrong it will call back the txt command which prints out the message in the .txt file. If there was a problem, the
callback would call the err error message. */

const {readFile, readFileSync} = require('fs');

readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt);
});
console.log("Do this ASAP");



const { readFile } = require('fs').promises;

..
async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
}


