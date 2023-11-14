import { legacy_createStore as createStore } from 'redux';
import reducers from './Reducer/index';


const Store = createStore (reducers,{}) 
export  default Store;