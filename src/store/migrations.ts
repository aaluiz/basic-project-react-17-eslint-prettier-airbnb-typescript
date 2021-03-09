/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { initialState as todos } from './slices/Todo.store';

const migrations = {
  0: (state: any) => {
    return {
      ...state,
      todos,
    };
  },
};

export default migrations;
