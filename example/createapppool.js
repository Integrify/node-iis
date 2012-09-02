var iis = require('../');
//
// create a new application pool and set the identity to NetworkService
//
iis.createAppPool({
        name:'NodePool',
        identity:'NetworkService'
    },
    function (err, stdout) {
        if (!err) {
            console.log('App pool created');
        }
    });

