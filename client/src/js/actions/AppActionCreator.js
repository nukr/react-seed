const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let AppActionCreators = {

  load(){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DATA_LOAD,
      items: data
    })
  }

};

module.exports = AppActionCreators;
