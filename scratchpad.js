'use strict';

// <script src='http'> </script>
const http = require('http');  //node core module
const express = require('express');  //node_module


// const {find, remove} = require('./modules/myModule'); // custom module
// find();
// remove();

const value = require('./modules/myModule'); // custom module

console.log('what did we get?', value);
