const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const actions = require('../actions/AppActionCreator');

var EventEmitter = require('events').EventEmitter; // 取得一個 pub/sub 廣播器

//========================================================================
//
// Public API

// 等同於 TodoStore extends EventEmitter
// 從此取得廣播的能力
// 由於將來會返還 TodoStore 出去，因此下面寫的會全變為 public methods
var data = {
  a: 1,
  b: 2,
  c: 3
}

var Store = {};

// 所有 todo 資料

// 目前選取的 todo 項目

/**
 * 建立 Store class，並且繼承 EventEMitter 以擁有廣播功能
 */
Object.assign(Store, EventEmitter.prototype, {

  getTruth() {
    return data;
  },

  addChangeListener(callback) {
    this.on(AppConstants.CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(AppConstants.CHANGE_EVENT, callback);
  }

});

Store.dispatchToken = AppDispatcher.register(function eventHandlers(evt) {

  var action = evt.action;

  switch (action.actionType) {

    case AppConstants.SAVE:
      Store.emit(AppConstants.CHANGE_EVENT);
      break;

    default:
  }
})

//
module.exports = Store;
