import { USER_DATA, USER_FIND, USER_EDIT } from "./actionsType";

const initialState = {
  userData: [],
  userFind: {},
  userEdit: {},
};

// const updateArrayUsers = (users, updateUser, userId) => {
//   let hasUpdate = false;

//   const index = users.findIndex((el) => {
//     return el.id === userId;
//   });

//   const userObj = users[index];

//   for (const key in updateUser) {
//     if (userObj[key] !== updateUser[key]) {
//       hasUpdate = true;
//       break;
//     }
//   }

//   if (!hasUpdate) {
//     console.log("NE OBNOVIL");

//     return users;
//   }
//   console.log("BLYAT OBNOCIL");

//   const newUser = { ...userObj, ...updateUser };

//   const newUsers = [
//     ...users.slice(0, index),
//     newUser,
//     ...users.slice(index + 1),
//   ];

//   return newUsers;
// };

// const updateArrayUsers = (users, updateUser, id) => {
//   let hasUpdate = false;

//   const indexUser = users.findIndex((el) => {
//     return el.id === id;
//   });

//   if (indexUser === -1) users;

//   const correntUser = users[indexUser];

//   for (const key in updateUser) {
//     if (correntUser[key] !== updateUser[key]) {
//       hasUpdate = true;
//       break;
//     }
//   }
//   console.log("net update");

//   if (!hasUpdate) users;

//   console.log("UPDATE");
//   const newObj = { ...correntUser, ...updateUser };

//   const newUsers = [
//     ...users.slice(0, indexUser),
//     newObj,
//     ...users.slice(indexUser + 1),
//   ];

//   return newUsers;
// };

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
