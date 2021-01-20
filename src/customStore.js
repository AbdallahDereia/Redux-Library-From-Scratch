"use strict";
exports.__esModule = true;
exports.createStore = void 0;
var Store = /** @class */ (function () {
    function Store(reducer) {
        var _this = this;
        /**
         * This fuction returns the current state
         */
        this.getState = function () {
            return _this._state;
        };
        /**
         *
         * @param action
         * This function dispatches an action
         */
        this.dispatch = function (action) {
            //call the reducer to get the new state
            _this._state = _this.reducer(_this._state, action);
            //Notify the subscribers
            _this.listners.forEach(function (listener) {
                listener();
            });
        };
        /**
         *
         * this function get called every time the store gets changed
         */
        this.subscribe = function (listener) {
            _this.listners.push(listener);
        };
        this.reducer = reducer;
        this._state = [];
        this.listners = [];
    }
    return Store;
}());
/**
 *
 * @param reducer
 * This function returns a new store object
 */
var createStore = function (reducer) {
    return new Store(reducer);
};
exports.createStore = createStore;
