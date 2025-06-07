import { USER_DATA, USER_FIND, USER_EDIT } from "./actionsType";

type User = {
    id: number,
    name: string,
    jobTitle: string,
    departament: string,
    company: string,
}

interface RootReducer {
  userData: User[] ;
  userFind: User | null;
  userEdit: User | null;
}

type Action = 
  | {type: "USER_DATA"; payload: User[]} 
  | {type: "USER_FIND"; payload: User} 
  | {type: "USER_EDIT"; payload: User};
  


const initialState:RootReducer = {
  userData: [],
  userFind: null,
  userEdit: null,
};


const updateArrayUsers = (users:User[], updateUser: User, id:number): User[] => {
  let hasUpd = false;

  const currIndex = users.findIndex((el) => {
    return el.id === id;
  });

  if (currIndex === -1) {
    return users;
  }

  const currUser = users[currIndex];



  const hasTest = (Object.entries(currUser) as Array<[keyof User, string | number]> ).some(([key, value]) => {
    return updateUser[key] !== value;
  });


  console.log(hasTest, "TEST SS");

  // for (const k  in currUser) {
  //   if (currUser[k as keyof User] !== updateUser[k as keyof User]) {
  //     hasUpd = true;
  //     break;
  //   }
  // }

  if (hasUpd) {
    console.log("ne obnovil");

    return users;
  }
  console.log("obnova sss");

  const newObj = { ...currUser, ...updateUser };

  return [...users.slice(0, currIndex), newObj, ...users.slice(currIndex + 1)];
};

export const rootReducer = (state: RootReducer = initialState, action:Action) => {
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
