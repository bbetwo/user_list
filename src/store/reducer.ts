import { USER_DATA, USER_FIND, USER_EDIT } from "./actionsType";

const initialState = {
  userData: [],
  userFind: {},
  userEdit: {},
};


const updateArrayUsers = (users, updateUser, id) => {
  let hasUpd = false;

  const currIndex = users.findIndex((el) => {
    return el.id === id;
  });

  if (currIndex === -1) {
    return users;
  }

  const currUser = users[currIndex];

  let hasTest;

  hasTest = Object.entries(currUser).some(([key, value]) => {
    return updateUser[key] !== value;
  });

  console.log(hasTest, "TEST SS");

  for (const k in currUser) {
    if (currUser[k] !== updateUser[k]) {
      hasUpd = true;
      break;
    }
  }

  if (!hasUpd) {
    console.log("ne obnovil");

    return users;
  }
  console.log("obnova sss");

  const newObj = { ...currUser, ...updateUser };

  return [...users.slice(0, currIndex), newObj, ...users.slice(currIndex + 1)];
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
      return {
        ...state,
        userData: updateArrayUsers(state.userData, action.payload, id),
      };
    }

    default:
      return state;
  }
};
