/* libraries */
var fs = require('fs');

/* set the args */
var file = process.argv[2];

/* pipe the data to stdout */
fs.createReadStream(file).pipe(process.stdout);