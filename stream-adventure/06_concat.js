/* libraries */
var concat = require('concat-stream');

/* process the input and write to output */
process.stdin.pipe(concat(function (buffer)
{
	var string = buffer.toString();
	var split_string = string.split('');
	var reversed = split_string.reverse();
	var output = reversed.join('');
	console.log(output);
}));
