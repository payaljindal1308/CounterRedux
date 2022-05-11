

function createCounterReducer(state={}, action) {
    const {type, name} = action;
    switch (type) {
      case `INCREMENT`:
        return {...state, [name]: state[name] + 1};
      case `DECREMENT`:
        return {...state, [name]: state[name] - 1};
      case 'ADDCOUNTER':
        return {...state, [name]: 0};
      default:
        return state;
    }
  }
  
  export default createCounterReducer;