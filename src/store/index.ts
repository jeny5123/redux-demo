import { createStore, combineReducers } from 'redux';
import calculator, { State as CalcuatorState } from './calcuator';
import dogs, { State as DogState } from './dogs';

export type State = {
  calculator: CalcuatorState;
  dogs: DogState;
};

const rootReducer = combineReducers({
  calculator,
  dogs
});

const store = createStore(rootReducer);

export default store;
