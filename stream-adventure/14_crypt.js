/* libraries */
var crypto = require('crypto');

/* set vars */
var passphrase = process.argv[2];

/* create the stream */
var stream = crypto.createDecipher('aes256', passphrase);

/* pipe stdin to the stream */
process.stdin.pipe(stream).pipe(process.stdout);
