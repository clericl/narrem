import * as UserAPIUtil from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user,
    };
};

export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users,
    };
};

export const receiveUserErrors = errors => {
    return {
        type: RECEIVE_USER_ERRORS,
        errors,
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
};

export const fetchUser = userId => dispatch => {
    return UserAPIUtil.fetchUser(userId).then(
        res => dispatch(receiveUser(res)),
        err => dispatch(receiveUserErrors(err.responseJSON))
    );
};

export const createUser = user => dispatch => {
    return UserAPIUtil.createUser(user)
        .then(res => res.json())
        .then(res => {
            if (res.errors) {
                dispatch(receiveUserErrors(res))
            } else {
                dispatch(receiveCurrentUser(res))
            }
        });
};

export const editUser = user => dispatch => {
    return UserAPIUtil.editUser(user).then(
        res => dispatch(receiveUser(res))
    );
};