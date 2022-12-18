import {combineReducers, createStore} from 'redux';
import birdspotsReducer from '../reducers/birdspots.reducer';
import walksReducer from '../reducers/walks.reducer';

const rootReducer = combineReducers({
  birdSpots: birdspotsReducer,
  walks: walksReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
