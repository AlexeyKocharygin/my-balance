export const ADD_INCOME = 'ADD_INCOME';

export const addIncome = (income) => ({
    type: ADD_INCOME,
    payload: income
});

export const DELETE_INCOME = 'DELETE_INCOME';

export const deleteIncome = (income) => ({
    type: DELETE_INCOME,
    payload: income
})

export const UPDATE_INCOME = 'UPDATE_INCOME';

export const updateIncome = (index, data) => ({
    type: UPDATE_INCOME,
    payload: {index, data}
});

export const DROP_INCOME = 'DROP_INCOME';

export const dropIncome = (income) => ({
    type: DROP_INCOME,
    payload: income
});