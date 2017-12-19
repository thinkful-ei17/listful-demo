'use strict';

// module.exports = {}
// exports = module.exports

module.exports.foo = 35
console.log('what is exports?', exports)

const create= function () {
  console.log('do create');
};
const find= function () {
  console.log('do find');
};
const update= function () {
  console.log('do update');
};
const remove= function () {
  console.log('do delete');
};

exports = {create, find, update, remove};
console.log('what is exports?', exports);

// node always exports the `module.exports` object














// const {create, find, update, remove}  = model;
// module.exports.foo = model.create;
// module.exports.bar = model.find;
// module.exports.update = model.update;
// module.exports.remove = model.remove;
