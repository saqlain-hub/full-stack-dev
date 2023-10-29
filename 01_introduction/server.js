// You should already know:
// HTML, CSS, and JavaScript
// Possibly experience with other libraries and frameworks

// How NodeJS differs from Vanilla JS
// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is in the terminal window
// console.log("Hello World");
// 3) global object instead of window object
// console.log(global);

// 4) Has common Core modules that we will explore
// 5) CommonJS modules import instead of ES6 modules
// 6) NodeJS is missing some JS APIs like fetch

const os = require("os");
const path = require("path");
const math = require("./math");
const { add, subtract, multiply, divide } = require("./math"); // destructure add() method from custom math module

// console.log(math.add(2, 3));

console.log(add(5, 4));
console.log(subtract(5, 4));
console.log(multiply(5, 4));
console.log(divide(2, 3));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
