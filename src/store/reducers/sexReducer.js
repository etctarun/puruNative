import {SEX} from '../actions/types';
const initialState = {text: ''};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEX:
      return {text: action.data};
    default:
      return state;
  }
}
