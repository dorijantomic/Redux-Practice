const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
          ...state, // We use the spread operator to create a copy of the state and then work on it in an immutable way - meaning we do not work directly on the 'REAL' state.
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
          ...state,
        counter: state.counter - 1
      };
    case "ADDITION":
      return {
          ...state,
        counter: state.counter + action.val
      };

    case "SUBTRACTION":
      return {
          ...state,
        counter: state.counter - action.val
      };

      case 'STORE_RESULT':
          return {
              ...state,
              results: state.results.concat({id: new Date(), value: state.counter}) // we use concat to 'push' the counter into results array 
                                                          // concat creates a copy of the array we work on and returns a new copy of it 
                                                         // this is important as to not update the results state directly

          }
  }

  return state;
};

export default reducer;
