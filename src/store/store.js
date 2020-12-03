import {createStore, combineReducers} from 'redux';

import nameReducer from './reducers/nameReducer';
import ageReducer from './reducers/ageReducer';
import sexReducer from './reducers/sexReducer';

rootReducer = combineReducers({
  name: nameReducer,
  age: ageReducer,
  sex: sexReducer,
});
const configureStore = () => createStore(rootReducer);

export default configureStore;
