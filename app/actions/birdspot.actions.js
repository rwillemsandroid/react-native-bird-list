import {ADD_BIRD_SPOTTING, REMOVE_BIRD_SPOTTING} from '../constants';

export function addBirdSpot(birdSpotting) {
  return {
    type: ADD_BIRD_SPOTTING,
    payload: birdSpotting,
  };
}

export function removeBirdSpot(birdSpotId) {
  return {
    type: REMOVE_BIRD_SPOTTING,
    payload: birdSpotId,
  };
}
