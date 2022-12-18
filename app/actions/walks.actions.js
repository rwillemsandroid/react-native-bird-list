import {ADD_WALK, REMOVE_WALK} from '../constants';

export function addWalk(walk) {
  return {
    type: ADD_WALK,
    payload: walk,
  };
}

export function removeWalk(walk) {
  return {
    type: REMOVE_WALK,
    payload: walk,
  };
}
