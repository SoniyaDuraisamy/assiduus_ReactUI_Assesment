import { ActionTypes } from "../Content/ActionType"

const initialState = {

  Report: [],
  Invoice: [],
  Cash: [],
  Account: []
}

console.log(initialState, "initialState");
export const reportReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MONTHLY_REPORT:
      initialState.Report = [...payload];
      return initialState

    case ActionTypes.SET_INVOICE_REPORT:
      initialState.Invoice = [...payload];
      return initialState

    case ActionTypes.SET_TOTALCASH_REPORT:
      initialState.Cash = [...payload];

    case ActionTypes.SET_ACCOUNT_REPORT:
      initialState.Account = [...payload];
      return initialState
    default:
      return state;
  }

}



