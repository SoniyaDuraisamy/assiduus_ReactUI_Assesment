
import React from 'react'

import {ActionTypes} from '../Content/ActionType'

export const setReport =(Report) =>{
//   console.log(Report,"222");
    return{
        type:ActionTypes.SET_MONTHLY_REPORT,
        payload:Report, 
    };
};
export const setInvoice =(Invoice) =>{
    //   console.log(Invoice,"222");
        return{
            type:ActionTypes.SET_INVOICE_REPORT,
            payload:Invoice, 
        };
    };
    export const setTotalCash =(Cash) =>{
          return{
              type:ActionTypes.SET_TOTALCASH_REPORT,
              payload:Cash, 
          };
      };
      export const AccountReport =(Account) =>{
        return{
            type:ActionTypes.SET_TOTALCASH_REPORT,
            payload:Account, 
        };

    };
    
