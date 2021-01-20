"use strict";
exports.__esModule = true;
var customStore_1 = require("./customStore");
var reducer_1 = require("./reducer");
var store = customStore_1.createStore(reducer_1["default"]);
store.subscribe(function () {
    console.log("The state changed ", store.getState());
});
store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'Bug1'
    }
});
console.log(store.getState());
store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'Bug2'
    }
});
store.subscribe(function () {
    console.log("The state changed", store.getState());
});
// store.dispatch({
//     type:'bugRemoved',
//     payload:{
//         id:1
//     }
// })
// store.dispatch({
//     type:'bugResolved',
//     payload:{
//         id:1
//     }
// })
