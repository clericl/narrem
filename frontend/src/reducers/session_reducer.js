import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullState = {
    currentUser: null,
};

const sessionsReducer = (state = _nullState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUser: Object.keys(action.user)[0] };
        case LOGOUT_CURRENT_USER:
            return _nullState;
        default:
            return state;
    }
};

export default sessionsReducer;