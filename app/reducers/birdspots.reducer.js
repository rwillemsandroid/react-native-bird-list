import {ADD_BIRD_SPOTTING, REMOVE_BIRD_SPOTTING} from '../constants';
import uuid from 'react-native-uuid';

const initialState = {
  birdsList: [
    {
      id: uuid.v4(),
      species: 'Roodborstje',
      walkId: '111-111-111',
    },
    {
      id: uuid.v4(),
      species: 'Merel',
      walkId: '111-111-111',
    },
    {
      id: uuid.v4(),
      species: 'Koolmees',
      walkId: '111-111-111',
    },
    {
      id: uuid.v4(),
      species: 'Groene specht',
      walkId: '222-222-222',
    },
    {
      id: uuid.v4(),
      species: 'Watersnip',
      walkId: '222-222-222',
    },
    {
      id: uuid.v4(),
      species: 'Wilde eend',
      walkId: '222-222-222',
    },
    {
      id: uuid.v4(),
      species: 'Pimpelmees',
      walkId: '333-333-333',
    },
    {
      id: uuid.v4(),
      species: 'Blauwe Reiger',
      walkId: '333-333-333',
    },
    {
      id: uuid.v4(),
      species: 'Kraai',
      walkId: '333-333-333',
    },
    {
      id: uuid.v4(),
      species: 'Buizerd',
      walkId: '444-444-444',
    },
    {
      id: uuid.v4(),
      species: 'Winterkoning',
      walkId: '444-444-444',
    },
    {
      id: uuid.v4(),
      species: 'Goudhaan',
      walkId: '444-444-444',
    },
    {
      id: uuid.v4(),
      species: 'Grote bonte specht',
      walkId: '444-444-444',
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
