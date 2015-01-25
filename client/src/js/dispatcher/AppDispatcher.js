var AppConstants = require('../constants/AppConstants');

var Dispatcher = require('flux').Dispatcher;

/**
 * flux-chat 內最新的 dispatcher
 */
var AppDispatcher = new Dispatcher();

Object.assign(AppDispatcher, {

    handleServerAction: function(action) {
        var payload = {
            source: AppConstants.SOURCE_SERVER_ACTION,
            action: action
        };

        this.dispatch(payload);
    },

    handleViewAction: function(action) {
        var payload = {
            source: AppConstants.SOURCE_VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    },

    handleRouterAction: function(path) {
        var payload = {
            source: AppConstants.SOURCE_ROUTER_ACTION,
            action: path
        };
        this.dispatch(payload);
    }
});

module.exports = AppDispatcher;
