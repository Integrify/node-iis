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

console.log(site_name);

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
            }, cb);
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
                console.log(site);
                assert.equal(site['SITE.NAME'], site_name);
                console.log(site_name + ' exists');

                cb();
            });

        },
        //
        // stop site
        //
        'stop_site':function (cb) {

            iis.stopSite(site_name, function (err,rsp) {
                console.log('Stop site: ' + rsp);
                assert.ifError(err);
                cb();
            });

        },
        //
        // start site
        //
        'start_site':function (cb) {
            iis.startSite(site_name, function (err,rsp) {
                console.log('Start site: ' + rsp);
                assert.ifError(err);

                cb();
            });

        },
        //
        //stop the site again
        //
        'stop_site_again':function (cb) {

            iis.stopSite(site_name, function (err,rsp) {
                console.log('Stop site again: ' + rsp);
                assert.ifError(err);
                cb();
            });

        },
        //
        // remove site
        //
        'remove_site':function (cb) {
            iis.deleteSite(site_name, function (err, rsp) {
                console.log(rsp);
                cb(err);
            });

        }},
    function (err, results) {
        assert.ifError(err);
        console.log('Testing complete');

    });

