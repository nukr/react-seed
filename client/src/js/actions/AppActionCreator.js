const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const utils = require('../utils');
const co = require('co');


let AppActionCreators = {

  load(){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DATA_LOAD,
      items: data
    });
  },

  initialize(){
    co(function* () {
      let data = yield utils.getInitialData();
      AppDispatcher.handleViewAction({
        actionType: AppConstants.INIT,
        items: data
      });
    });
  }
};

module.exports = AppActionCreators;
