import * as actionTypes from '../actions'

const initialState = {

  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
            case actionTypes.STORE_RESULT:
                    return {
                        ...state,
                        results: state.results.concat({id: new Date(), value: action.result}) // we use concat to 'push' the counter into results array 
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
