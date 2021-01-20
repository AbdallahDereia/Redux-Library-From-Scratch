"use strict";
exports.__esModule = true;
exports.createStore = void 0;
var Store = /** @class */ (function () {
    function Store(reducer) {
        var _this = this;
        this.getState = function () {
            return _this._state;
        };
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
var createStore = function (reducer) {
    return new Store(reducer);
};
exports.createStore = createStore;
