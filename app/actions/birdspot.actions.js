import {ADD_BIRD_SPOTTING} from '../constants';

export function addBirdSpot(birdSpotting) {
  return {
    type: ADD_BIRD_SPOTTING,
    payload: birdSpotting,
  };
}
