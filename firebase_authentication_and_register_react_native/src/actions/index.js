import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, CREATE_USER_SUCCESS, ERROR_FOUND, CLEAR_ERROR, LOGIN_USER } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}


export const loginUser = (email, password) => {
    return (dispath) => {
        dispath({type: 'LOGIN_USER'});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispath({type: LOGIN_USER_SUCCESS, payload: user});
        })
        .catch((err) => dispath({type: ERROR_FOUND, payload: err}));
    }
}

export const registerUser = (email, password) => {
    return (dispath) => {
        dispath({type: 'LOGIN_USER'});
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
            dispath({type: CREATE_USER_SUCCESS, payload: user});
        })
        .catch((err) => dispath({type: ERROR_FOUND, payload: err}));
    }
}

export const clearError = (text) => {
    return {
        type: CLEAR_ERROR
    }
}