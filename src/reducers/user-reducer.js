import * as actions from '../actions/user-actions';

/**
 * Principal reducer relatif aux actions de l'utilisateur.
 * @param state
 * @param action
 * @returns {*}
 */
function reducer(state = {}, action) {
  switch (action.type) {
    case actions.CONNECT_USER_REQUEST:
      return { ...state, fetching_user:true };
    case actions.CONNECT_USER_SUCCESS:
      return { ...state, fetching_user:false };
    case actions.CONNECT_USER_FAILURE:
      return { ...state, fetching_user:false, error:action.error };
    default:
      return state;
  }
}

export default reducer;
