import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import co from 'co';


let ServerActionCreator = {
  getData (data) {
    AppDispatcher.handleServerAction({
      actionType: AppConstants.GET_DATA,
      data: data
    });
  }
};

export default ServerActionCreator;

