///
///  Test site creation, delete ...
///
var iis = require('../iis.js'),
    assert = require('assert'),
    async = require('async'),
    _ = require('underscore'),

    site_name = 'iis_UnitTest'

//
// Test creating and mapping app pool
//



async.series({

        //
        // create app pool with the same name
        //
        'create_apppool' :function (cb) {
            iis.createAppPool(site_name
                , function(err,rsp) {
                    console.log('Create app pool: ' + rsp);
                    assert.ifError(err);
                    cb();
                });
        },
        //
        // map app pool to site
        //
        'map_apppool' :function (cb) {
            iis.mapAppPool(site_name + '/',site_name
                ,
                function(err,rsp) {
                    console.log('Map app pool: ' + rsp);
                    assert.ifError(err);
                    cb();
                }
            );
        },
        //
        // check if site exists, get info
        //
        'query_apppool':function (cb) {
            iis.list('apppool', function (err, sites) {
                assert.ifError(err);

                var site = _.find(sites, function (s) {
                    return s['APPPOOL.NAME'] == site_name;
                }) || {};

                assert.equal(site['APPPOOL.NAME'], site_name);
                console.log('Application pool ' + site_name + ' exists');

                cb();
            });

        }},

    function (err, results) {
        assert.ifError(err);
        console.log('App pool testing complete.');

    });

