//
// Test deleting app pool and site
//

var iis = require('../iis.js'),
    assert = require('assert'),
    async = require('async'),
    _ = require('underscore'),

    site_name = 'iis_UnitTest'

async.series({
        //
        // remove site
        //
        'remove_apppool':function (cb) {
            iis.deleteAppPool(site_name, function (err, rsp) {
                console.log(rsp);
                assert.ifError(err);
                cb(err);
            });

        },
        //
        // remove site
        //
        'remove_site':function (cb) {
            iis.deleteSite(site_name, function (err, rsp) {
                console.log(rsp);
                assert.ifError(err);
                cb(err);
            });

        }},
    function (err, results) {
        assert.ifError(err);
        console.log('Cleanup testing complete');

    });

