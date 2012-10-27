# node-iis

Node module for administering sites, application pools and related settings in IIS 7.  

Wraps up common commands you would use in the \windows\system32\inetsrv\appcmd utility.

Great from easy command line scripting, management or application install tools. 

<em>Note: because this is IIS, you need to execute it using "Run As Administrator".</em>

## Install

<pre>
    npm install iis
</pre>

## Basics

<pre>
  var iis = require('iis');
  iis.createSite({
    name:'MyNewSite',
    port: 80,
    binding: '*',
    path : __dirname + '/site'
    });

</pre>
  

