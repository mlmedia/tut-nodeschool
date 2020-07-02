/* library */
var duplexer = require('duplexer');

/* set vars */
var spawn = require('child_process').spawn;

/* export the duplex stream function as a module */
module.exports = function (cmd, args)
{
    var child = spawn(cmd, args);
    return duplexer(child.stdin, child.stdout);
}
