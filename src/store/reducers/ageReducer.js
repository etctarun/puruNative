import {AGE} from '../actions/types';
const initialState = {text: ''};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGE:
      return {text: action.data};
    default:
      return state;
  }
}
