function createStore(){
    let state;
    const getState = () => {
      return state
    }
    const dispatch = (action) => {
      state = reducer(state, action)
      render()
    }
    state = reducer(state, {})
    return {getState, dispatch}
  }

export default createStore;
