/* libraries */
var duplex = require('duplexer')
var through = require('through')

/* export the counter and duplex functions in a module */
module.exports = function (counter)
{
    var counts = {};
    return duplex(through(record_count, set_count), counter);

    /* record the country counts and pass to counts object */
    function record_count(obj)
    {
        var country = obj.country;
        var count = counts[country] || 0;
        counts[country] = count + 1;
    }

    /* set the count */
    function set_count()
    {
        counter.setCounts(counts);
        counts = {};
    }
}
