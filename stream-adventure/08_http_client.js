/* libraries */
var request = require('request');

/* set vars */
var r = request.post('http://localhost:8099');

/* pipe value from request to process.stdout */
process.stdin.pipe(r).pipe(process.stdout);
