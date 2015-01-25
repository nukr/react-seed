const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let AppActionCreators = {

  load(){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DATA_LOAD,
      items: data
    })
  },

  saveToStore(data){
    console.log('hi');
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE,
      items: data
    })
  }

};

module.exports = AppActionCreators;
