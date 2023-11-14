import  {combineReducers } from 'redux';
import { reportReducers } from './MonthlyReducer';

const reducers = combineReducers({
    allReport : reportReducers,   
   
})

export default reducers;