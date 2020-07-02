/* libraries */
var crypto = require('crypto');
var zlib = require('zlib');
var through = require('through');
var tar = require('tar');

/* set args to vars */
var cipher = process.argv[2];
var passphrase = process.argv[3];

/* set objects */
var gunzip = zlib.createGunzip();
var parser = tar.Parse();
var decrypter = crypto.createDecipher(cipher, passphrase);

parser.on('entry', function (entry)
{
    if (entry.type !== 'File')
    {
        return;
    }

    /* set function vars */
    var name = entry.path;
    var hasher = crypto.createHash('md5');

    /* pipe the hasher with the call back to write to stdout */
    entry.pipe(hasher).pipe(through(function write_line(hash_buffer)
    {
        var hash = hash_buffer.toString('hex');
        process.stdout.write(hash + ' ' + name + '\n');
    }))
})

/* pipe the stdin to the decrypter, gunzip, and parser objects */
process.stdin.pipe(decrypter).pipe(gunzip).pipe(parser);
