/* get libraries */
var through = require('through2');
var split = require('split');

/* set vars */
var line_count = 0;

/* function to alternate lines and process */
var tr = through(function(buffer, _, next)
{
	var line = buffer.toString();
	if ( line_count % 2 === 0 )
	{
		this.push(line.toLowerCase() + '\n');
	}
	else
	{
		this.push(line.toUpperCase() + '\n');
	}
	line_count ++;
	next();
});

/* process to output */
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
