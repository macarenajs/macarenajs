const ms = require('ms');


module.exports = function sayHello() {
  setTimeout(() => {
    console.log('Hello! I\'m a task');
  }, ms('3min'));
};
