import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import co from 'co';


let ViewActionCreator = {
  getData () {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GET_DATA
    });
  }
};

export default ViewActionCreator;
