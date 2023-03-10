import * as types from "./actionTypes";
import { auth } from  '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { type } from "@testing-library/user-event/dist/type";

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

//LogoutActions
const logoutStart = () => ({
  type: types.LOGOUT_START
})

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
})

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error
})

export const addToBasket = (item) => ({
  type: types.ADD_TO_BASKET,
  payload: item,
})

export const removeFromBasket = (id) => ({
  type: types.REMOVE_FROM_BASKET,
  payload: id,
})

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user
})

export const setBasketEmpty = () => ({
  type: types.SET_BASKET_EMPTY
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

export const logoutInitiate = () => {
  return function(dispatch){
    dispatch(logoutStart());
    signOut(auth)
    .then((resp) => dispatch(logoutSuccess()))
    .catch((error) => dispatch(logoutFail(error.message)))
  }
}
