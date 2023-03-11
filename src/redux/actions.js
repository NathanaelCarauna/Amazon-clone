import * as types from "./actionTypes";
import { auth } from  '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

//RegisterActions
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

//LoginActions
const loginStart = () => ({
  type: types.LOGIN_START
})

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user
})

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error
})

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user
})

export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth,email, password)      
      .then(({ user }) => {
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(loginSuccess(user));
    })
    .catch((error) => dispatch(loginFail(error.message)));
  }
}
