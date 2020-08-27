import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, CREATE_USER_SUCCESS, ERROR_FOUND, CLEAR_ERROR, LOGIN_USER } from '../actions/types';

const initialState = { 
    email: '', 
    password: '', 
    user: null,
    err: '',
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {

        case EMAIL_CHANGED:
            return {...state, email: action.payload, err: ''}

        case PASSWORD_CHANGED:
            return {...state, password: action.payload, err: ''}

        case LOGIN_USER:
            return {...state, loading: true}

        case LOGIN_USER_SUCCESS:
        case CREATE_USER_SUCCESS:
            return {...state, ...initialState, user: action.payload}

        case ERROR_FOUND:
            return {...state, err: action.payload, loading: false}

        case CLEAR_ERROR:
            return {...state, err: ''}


        default:
            return state;
    }
}