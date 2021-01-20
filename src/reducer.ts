
let lastId = 0
const initialState = [
        {
            id: lastId,
            description:'',
            resolved:false
        }
    ]
/**
 * 
 * @param state 
 * @param action 
 * This function takes the current instance of the store 
 * and returns the updated store
 */
export default function reducer(state=initialState ,action) {
    if(action.type === 'bugAdded'){
        return [
            ...state,
            {
                id:++lastId,
                description:action.payload.description,
                resolved:false
            }
        ]
    }
    else if (action.type === 'bugRemoved'){
        return state.filter(bug => bug.id !== action.payload.id)
    }
    else if (action.type === 'bugResolved') {
        return state.map(bug => ({...bug , resolved:true}))
    }
    else 
        return state
}