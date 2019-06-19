import * as actionTypes from '../actions'

const initialState = {
  counter: 0,
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
  }

  return state;
};

export default reducer;
