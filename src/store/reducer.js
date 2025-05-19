import { USER_DATA, USER_FIND, USER_EDIT } from "./actionsType";

const initialState = {
  userData: [],
  userFind: {},
  userEdit: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    case USER_FIND:
      return {
        ...state,
        userFind: action.payload,
      };

    case USER_EDIT: {
      const { id } = action.payload;

      const index = state.userData.findIndex((el) => {
        return el.id === id;
      });

      const newObj = { ...state.userData[index], ...action.payload };

      const newState = [
        ...state.userData.slice(0, index),
        newObj,
        ...state.userData.slice(index + 1),
      ];

      return {
        ...state,
        userData: newState,
      };
    }

    default:
      return state;
  }
};
