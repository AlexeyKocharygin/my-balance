import { ADD_INCOME, DELETE_INCOME, UPDATE_INCOME, DROP_INCOME } from "../actions/income";

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
        case UPDATE_INCOME: {
            const updateState = state.slice();

            updateState.splice(action.payload.index, 1, action.payload.data);

            return updateState;
        }
        case DROP_INCOME: {
            const copyState = state.slice();

            copyState.splice(0);
            
            return copyState;
        }
            
        default: {
            return state;
        }
    }
};

export default incomeReducer;