'use strict';

const create = function () {
  console.log('do create');
};
const find = function () {
  console.log('do find');
};
const update = function () {
  console.log('do update');
};
const remove = function () {
  console.log('do delete');
};

// "traditional" construct object with properties and values
/*
const someObject = {
  create: create,
  find: find,
  update: update,
  remove: remove
}
*/

//Object property shorthand
const someObject = { create, find, update, remove };
