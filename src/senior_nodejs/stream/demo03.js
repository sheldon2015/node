function writeOneMillionTimes(writer, data, encoding, callback) {
    var i = 1000000;
    write();
    function write() {
        var ok = true;

        do {
            i -= 1;
            if (i === 0) {
                // last time!
                writer.write(data, encoding, callback);
            } else {
                // see if we should continue, or wait
                // don't pass the callback, because we're not done yet.
                ok = writer.write(data, encoding);
            }
        } while (i > 0 && ok);

        if (i > 0) {
            // had to stop early!
            // write some more once it drains
            writer.once('drain', write);
        }
    }


}