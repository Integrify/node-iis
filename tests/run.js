///
// Test harness lifted from request module by Mikeal Rogers (https://github.com/mikeal/request/blob/master/tests/run.js)
//
var spawn = require('child_process').spawn
    , exitCode = 0
    ;

var tests = [
    'test-site.js',
    'test-apppool.js',
    'test-cleanup.js'
];


var next = function () {
    if (tests.length === 0) process.exit(exitCode);

    var file = tests.shift();
    console.log(file);
    var proc = spawn('node', [ 'tests/' + file ])
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on('exit', function (code) {
        exitCode += code || 0;
        next();
    });
}
next();