/* libraries */
var ws = require('websocket-stream');

/* set the stream var */
var stream = ws('ws://localhost:8099/');

/* write something to the stream */
stream.end('hello\n');
