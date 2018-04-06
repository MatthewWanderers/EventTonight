
import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

export default (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    console.log(action, "console logged");
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
    console.log(state, 'default happened');
      return state;
  }
};
