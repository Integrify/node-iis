///
///  Test site creation, delete ...
///
var iis = require('../iis.js'),
    assert = require('assert'),
    async = require('async'),
    _ = require('underscore'),
    site_name = 'iis_UnitTest',
    port = 8095;

//
// Test creating site
//

async.series({
        //
        // create site
        //
        'create_site':function (cb) {
            iis.createSite({
                name:site_name,
                protocol:'http',
                host:'*',
                port:port,
                path:__dirname
            }, function(err,rsp) {
                console.log('Create site ' + rsp);
                assert.ifError(err);
                cb();
            });
        },
        //
        // check if site exists, get info
        //
        'query_site':function (cb) {
            iis.list('site', function (err, sites) {
                assert.ifError(err);

                var site = _.find(sites, function (s) {
                    return s['SITE.NAME'] == site_name;
                }) || {};

                assert.equal(site['SITE.NAME'], site_name);
                console.log(site_name + ' exists');

                cb();
            });

        }},

    function (err, results) {
        assert.ifError(err);
        console.log('Site testing complete.');

    });

