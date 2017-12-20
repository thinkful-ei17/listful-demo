/* global $  */
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

  generateItemElement(item) {
    return `
    <li class="js-item-id-element" data-item-id="${item.id}">
      <input name="shopping-item" value="${item.name}" ${item.checked ? 'disabled' : ''}
        class="shopping-item js-shopping-item ${item.checked ? 'shopping-item__checked' : ''}"></input>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
  }

  shoppingList() {
    const listOfItems = this.store.data.map((item) => this.generateItemElement(item));
    $('.js-shopping-list').html(listOfItems.join(''));
  }

}
