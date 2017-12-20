/* global $ */
'use strict';

class Api {

  constructor(path, baseUrl = window.location.origin) {
    this.baseUrl = baseUrl;
    this.path = path;
  }

  _buildUrl(path, query = {}) {
    var url = new URL(path, this.baseUrl);

    const queryKeys = Object.keys(query);
    queryKeys.forEach(key => url.searchParams.set(key, query[key]));

    return url;
  }

  search(query, success) {
    const url = this._buildUrl(this.path, query);
    return $.ajax({
      type: 'GET',
      url: url,
      data: query,
      success: success
    });
  }

  create(obj, success) {
    const url = this._buildUrl(this.path);
    return $.ajax({
      type: 'POST',
      url: url,
      data: obj ? JSON.stringify(obj) : null,
      dataType: 'json',
      contentType: 'application/json',
      success: success
    });
  }
  
  details(id, success) {
    const url = this._buildUrl(`${this.path}/${id}`);
    return $.ajax({
      type: 'GET',
      url: url,
      success: success
    });
  }

  update(id, obj, success) {
    const url = this._buildUrl(`${this.path}/${id}`);
    return $.ajax({
      type: 'PUT',
      url: url,
      data: obj ? JSON.stringify(obj) : null,
      dataType: 'json',
      contentType: 'application/json',
      success: success
    });
  }

  remove(id, success) {
    const url = this._buildUrl(`${this.path}/${id}`);
    return $.ajax({
      type: 'DELETE',
      url: url,
      success: success
    });
  }
  
}