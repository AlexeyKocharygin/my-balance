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