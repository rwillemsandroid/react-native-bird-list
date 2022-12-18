import {ADD_BIRD_SPOTTING, REMOVE_BIRD_SPOTTING} from '../constants';
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

const birdspotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BIRD_SPOTTING:
      return {
        ...state,
        birdsList: [...state.birdsList, action.payload],
      };
    case REMOVE_BIRD_SPOTTING:
      return {
        ...state,
        birdsList: state.birdsList.filter(
          bird => bird.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
export default birdspotsReducer;
