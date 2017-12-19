'use strict';

/**
 * at the start of each module, node creates:
 *  `module.exports = exports = {}`
 * 
 * The value of module.exports is the thing that gets exports.
 * So you can use `exports.someProperty = someThing` syntax but
 * DO NOT reassign `exports = {someProperty : someThing}`.
 * 
 * Below is a common, safe and preferred structure
 */

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

// export the create, find and update, but not the remove method
module.exports = { create, find, update};

// Alternative longhand solution using `module.exports`
// module.exports.foo = model.create;
// module.exports.bar = model.find;
// module.exports.update = model.update;

// Alternative longhand solution using `exports`
// exports.foo = model.create;
// exports.bar = model.find;
// exports.update = model.update;

// DO NOT USE THE shorthand solution with `exports`
// **** THE FOLLOWING WILL NOT WORK AS EXPECTED ****
// exports = { create, find, update};