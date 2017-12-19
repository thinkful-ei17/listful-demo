'use strict';

const someObject = {
  create: function () {
    console.log('do create');
  },
  find: function () {
    console.log('do find');
  },
  update: function () {
    console.log('do update');
  },
  remove: function () {
    console.log('do delete');
  },
};

// "traditional" 
const find = someObject.find;
const remove = someObject.remove;

// Object destructuring
const { create, update } = someObject;

