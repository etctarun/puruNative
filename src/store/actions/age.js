import {AGE} from './types';

export const setAge = (text) => {
  return {
    type: AGE,
    payload: text,
  };
};
