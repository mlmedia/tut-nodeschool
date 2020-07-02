/* libraries */
var combine = require('stream-combiner')
var split = require('split')
var zlib = require('zlib')
var through = require('through')

/* module */
module.exports = function ()
{
    /* set vars */
    var genre_data;

    /* write function */
    function write(buf)
    {
        if (buf.length === 0)
        {
            return;
        }
        buf = JSON.parse(buf);
        if (buf.type === 'genre')
        {
            if (genre_data)
            {
                this.queue(JSON.stringify(genre_data) + '\n');
            }
            genre_data = {
                name: buf.name,
                books: []
            }
        }
        else
        {
            genre_data.books.push(buf.name);
        }
    }

    /* end function (queue the genre data) */
    function end()
    {
        this.queue(JSON.stringify(genre_data) + '\n');
        this.queue(null);
    };

    /* combine function - combine streams - write, queue and gzip */
    return combine(
        split(),
        through(write, end),
        zlib.createGzip()
    );
};
