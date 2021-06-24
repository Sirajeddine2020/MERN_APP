import {
  GET_CONTACTS,
  GET_CONTACT_BY_ID,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../constants/actionTypes";

const intialState = {
  users: [],
  userId: {},
  isEdit: false,
};

export const reducerUser = (state = intialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, users: action.payload };

    case GET_CONTACT_BY_ID:
      return { ...state, userId: action.payload[0] };

    case TOGGLE_TRUE:
      return { ...state, isEdit: true };

    case TOGGLE_FALSE:
      return { ...state, isEdit: false };

    default:
      return state;
  }
};
