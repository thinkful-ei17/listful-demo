'use strict';

// `require('http')` is kinda like a `<script src='http'> </script>` for node.js
// It loads the file, parses it like a script tag, but only exports a single object
const http = require('http');  //node core module
const express = require('express');  //node_module

/**
 * Require() and destructure syntax
 */
const {create, find, update} = require('../modules/myModule'); // custom module

create();
find();
update();

/**
 * Alternatively you can load the module and reference the methods using dot syntax
 */
const myModule = require('../modules/myModule'); // custom module

myModule.create();
myModule.find();
myModule.update();

