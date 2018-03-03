const loader = require('../files-loader.js');

// @TODO maybe we don't need all this
//
// it is just a hack to be quickly but in the end we can have two approaches:
//
// 1. a queue, where every new job/company that comes is sent to a queue
// and lambda connects to this queue
//
// and react when it comes:
//     - it has some side effects how to control number of requests?
//     - maybe we gonna need one scheduler? but right now this is kind of scheduler
//     - to be defined
//
// 2. Just consume the API, enable a more filters via API?
//
// 3. expose those functions as RPC and lambda consume those?
module.exports = function run() {
  const tasks = loader(__dirname);
  tasks.forEach(task => task());
};
