import * as actionTypes from './actions'

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
          ...state, // We use the spread operator to create a copy of the state and then work on it in an immutable way - meaning we do not work directly on the 'REAL' state.
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
          ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADDITION:
      return {
          ...state,
        counter: state.counter + action.val
      };

    case actionTypes.SUBTRACTION:
      return {
          ...state,
        counter: state.counter - action.val
      };

      case actionTypes.STORE_RESULT:
          return {
              ...state,
              results: state.results.concat({id: new Date(), value: state.counter}) // we use concat to 'push' the counter into results array 
                                                          // concat creates a copy of the array we work on and returns a new copy of it 
                                                         // this is important as to not update the results state directly

          }
          
    case actionTypes.DELETE_RESULT:
        const updatedArray = state.results.filter(result => result.id!== action.resultElId )
            return {
                ...state,
              results: updatedArray
            };
  }

  return state;
};

export default reducer;
