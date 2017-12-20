'use strict';

// Simple In-Memory Database (minimal synchronous version)
// initialize
// create
// find
// findById

const simDB = {

  create: function (newItem) {
    newItem.id = this.nextVal++;
    this.data.unshift(newItem);
    return newItem;
  },

  find: function (query = {}) {
    return this.data.filter(item => Object.keys(query).every(key => item[key] === query[key]));
  },

  findById: function (id) {
    id = Number(id);
    return this.data.find(item => item.id === id);
  },

  findByIdAndUpdate: function (id, update) {
    id = Number(id);
    let item = this.data.find(item => item.id === id);
    console.log(item);
    if (item) {
      Object.assign(item, update);
    }
    console.log(item);
    
    return item;
  },

  findByIdAndRemove: function (id) {
    id = Number(id);
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      return this.data.splice(index, 1).length;
    } else {
      return 0;
    }
  },

  initialize: function(data) {
    this.nextVal = 1000;
    this.data = data.map(item => {
      item.id = this.nextVal++;
      return item;
    });
    return this;
  }
  
};

module.exports = Object.create(simDB);
