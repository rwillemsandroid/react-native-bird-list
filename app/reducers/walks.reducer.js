import {ADD_WALK, REMOVE_WALK} from '../constants';
import uuid from 'react-native-uuid';

const initialState = {
  walks: [
    {
      id: '111-111-111',
      date: '2021-01-01',
      location: 'Eksterheide',
    },
    {
      id: '222-222-222',
      date: '2021-01-02',
      location: 'Groothoutenbos',
    },
    {
      id: '333-333-333',
      date: '2021-01-03',
      location: 'Liereman',
    },
    {
      id: '444-444-444',
      date: '2021-01-04',
      location: 'Epelaar',
    },
  ],
};

const walksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WALK:
      return {
        ...state,
        walks: [...state.walks, action.payload],
      };
    case REMOVE_WALK:
      return {
        ...state,
        walks: state.walks.filter(walk => walk.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default walksReducer;
