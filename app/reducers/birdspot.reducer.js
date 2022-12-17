import {ADD_BIRD_SPOTTING} from '../constants';
import uuid from 'react-native-uuid';

const initialState = {
  birdsList: [
    {
      id: uuid.v4(),
      species: 'Roodborstje',
    },
    {
      id: uuid.v4(),
      species: 'Merel',
    },
    {
      id: uuid.v4(),
      species: 'Koolmees',
    },
    {
      id: uuid.v4(),
      species: 'Groene specht',
    },
  ],
};

const birdSpotReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BIRD_SPOTTING:
      return {
        ...state,
        birdsList: state.birdsList.add(action.payload),
      };
    default:
      return state;
  }
};
export default birdSpotReducer;
