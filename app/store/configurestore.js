import {combineReducers, createStore} from 'redux';
import birdSpotReducer from '../reducers/birdspot.reducer';

const rootReducer = combineReducers({birdSpot: birdSpotReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
