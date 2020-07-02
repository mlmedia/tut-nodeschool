/* get libraries */
var through = require('through');                                                   

/* set var to be piped */                                                          
var to_be_upped = through(write, end);

/* function to write */
function write(data) {
	var data_upped = data.toString().toUpperCase();                                   
	this.queue(data_upped);                                                           
} 

/* function to end */
function end() 
{                                                                   
	this.queue(null);                                                                 
}

/* process input to output */
process.stdin.pipe(to_be_upped).pipe(process.stdout);