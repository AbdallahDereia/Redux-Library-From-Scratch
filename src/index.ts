import {createStore} from './customStore'
import reducer from './reducer'



const store = createStore(reducer)

store.subscribe(()=>{
    console.log("The state changed ", store.getState())
})



store.dispatch({
    type:'bugAdded',
    payload:{
        description: 'Bug1'
    }
})

console.log(store.getState())

store.dispatch({
    type:'bugAdded',
    payload:{
        description:'Bug2'
    }
})

store.subscribe(()=>{
    console.log("The state changed" , store.getState())
})
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

