'use strict';

const model = {
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
const find = model.find;
const remove = model.remove;

// Object destructuring
const { create, update } = model

