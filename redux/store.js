import { combineReducers, createStore } from 'redux';
import mealsReducer from './meals/meals.reducer';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default store;
