"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var lastId = 0;
var initialState = [
    {
        id: lastId,
        description: '',
        resolved: false
    }
];
/**
 *
 * @param {object} state
 * @param action
 * This function takes the current instance of the store
 * and returns the updated store
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (action.type === 'bugAdded') {
        return __spreadArrays(state, [
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]);
    }
    else if (action.type === 'bugRemoved') {
        return state.filter(function (bug) { return bug.id !== action.payload.id; });
    }
    else if (action.type === 'bugResolved') {
        return state.map(function (bug) { return (__assign(__assign({}, bug), { resolved: true })); });
    }
    else
        return state;
}
exports["default"] = reducer;
