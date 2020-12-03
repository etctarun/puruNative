import {NAME} from './types';

export const setName = (text) => {
  return {
    type: NAME,
    payload: text,
  };
};
