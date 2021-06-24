import axios from "axios";
import {
  GET_CONTACTS,
  GET_CONTACT_BY_ID,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../constants/actionTypes";

export const getContacts = () => (dispatch) => {
  axios
    .get("/api/users")
    .then((res) => dispatch({ type: GET_CONTACTS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addUser = (newUser) => (dispatch) => {
  axios
    .post("/api/users", newUser)
    .then(() => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`/api/users/${id}`)
    .then(() => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const getUserById = (id) => (dispatch) => {
  axios
    .get(`/api/users/${id}`)
    .then((res) => dispatch({ type: GET_CONTACT_BY_ID, payload: res.data }));
};

export const editUser = (id, editUser) => (dispatch) => {
  axios
    .put(`/api/users/${id}`, editUser)
    .then(() => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};
export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};
