import {SEX} from './types';

export const setSex = (text) => {
  return {
    type: SEX,
    payload: text,
  };
};
