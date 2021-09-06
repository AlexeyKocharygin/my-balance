import { ADD_INCOME, DELETE_INCOME } from "../actions/income";

const initialState = [];

const incomeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_INCOME: {
            return state.concat(action.payload);
        }
        case DELETE_INCOME: {
            const incomeIndex = state.indexOf(action.payload);
            const copyState = state.slice();
            
            copyState.splice(incomeIndex, 1);

            return copyState;
        }
        default: {
            return state;
        }
    }
};

export default incomeReducer;