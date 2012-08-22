var iis = require('../');
//
// create a new site on port 80
//
iis.createSite({
        name:'NewSite',
        protocol:'http',
        host:'*',
        port:80,
        path:'c:\\mynewsite'
    },
    function (err, stdout) {
        if (!err) {
            console.log('Site created');
        }
    });

