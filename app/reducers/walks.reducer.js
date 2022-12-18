import {ADD_WALK, REMOVE_WALK} from '../constants';
import moment from 'moment';

const initialState = {
  walks: [
    {
      id: '111-111-111',
      momentISOString: moment('2022-12-01').toISOString(),
      location: 'Eksterheide',
    },
    {
      id: '222-222-222',
      momentISOString: moment('2022-12-02').toISOString(),
      location: 'Groothoutenbos',
    },
    {
      id: '333-333-333',
      momentISOString: moment('2022-12-03').toISOString(),
      location: 'Liereman',
    },
    {
      id: '444-444-444',
      momentISOString: moment('2022-12-04').toISOString(),
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
