/* global $ Api Render Store */
'use strict';

const api = new Api('/items');
const store = new Store();
const render = new Render(store, api);

$(() => {

  api.search({}, response => {
    store.data = response;
    render.shoppingList();
  });
  
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();

    const inputForm = $(event.currentTarget);
    const newItemInput = inputForm.find('input[name=shopping-list-input]');

    api.create({ name: newItemInput.val() }, response => {
      newItemInput.val('');
      store.data.unshift(response);
      render.shoppingList();
    });
  });

  $('.js-shopping-list').on('click', '.js-item-id-element', event => {
    event.preventDefault();
    const id = $(event.currentTarget).attr('data-item-id');

    api.details(id, item => {
      console.log(item);
    });
  });

});
