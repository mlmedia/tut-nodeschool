function foo()
{
    quux = 2;
    var bar;
    function zip(){
        bar = true;
        var quux;
    }
    return zip;
}
