class Store {

    private _state:object
    private reducer:Function
    private listners:Function[]

    constructor(reducer:Function){
        this.reducer = reducer
        this._state = []
        this.listners = []
    }

    /**
     * This fuction returns the current state
     */
    getState = () => {
        return this._state
    }

    /**
     * 
     * @param action 
     * This function dispatches an action
     */
    dispatch = (action:object) => {
        //call the reducer to get the new state
        this._state = this.reducer(this._state , action)
        //Notify the subscribers
        this.listners.forEach(listener => {
            listener()
        });
    }

    /**
     * 
     * this function get called every time the store gets changed
     */
    subscribe = (listener:Function) => {
        this.listners.push(listener)
    }
}

/**
 * 
 * @param reducer 
 * This function returns a new store object
 */
export const createStore = (reducer:Function) => {
    return new Store(reducer)
}




