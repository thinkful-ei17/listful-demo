/* global $ */
'use strict';

class Render {
  
  constructor(store, api) {
    this.store = store;
    this.api = api;
  }

  page() {
    $('.js-page-view').hide();
    $('#' + this.store.view).show();
  }

  generateItemElement(item, index) {
    return `
    <li class="js-item-id-element" data-item-id="${index}">

    <span class="shopping-item js-shopping-item
      ${item.checked ? 'shopping-item__checked' : ''}">${item.name}</span>
    </li>`;
  }

  shoppingList() {
    const listOfItems = this.store.data.map((item, index) => this.generateItemElement(item, index));
    $('.js-shopping-list').html(listOfItems.join(''));
  }

}
