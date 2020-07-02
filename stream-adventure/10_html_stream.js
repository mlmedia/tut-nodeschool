/* libraries */
var trumpet = require('trumpet');
var through = require('through');

/* set vars */
var tr = trumpet();

/* function to upper */
var to_upper = function(buffer)
{
    this.queue(buffer.toString().toUpperCase());
}

/* replace innerHTML of the matching selector */
var stream = tr.select('.loud').createStream();
stream.pipe(through(to_upper)).pipe(stream);

/* pipe input to output */
process.stdin.pipe(tr).pipe(process.stdout);
