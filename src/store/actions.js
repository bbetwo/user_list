import { userGenerate } from "../utils/userGenerate";
import { USER_DATA, USER_FIND, USER_EDIT } from "./actionsType";

export const userEdit = (user) => {
  return {
    type: USER_EDIT,
    payload: user,
  };
};

export const userData = (count) => {
  return {
    type: USER_DATA,
    payload: userGenerate(count),
  };
};

export const userFind = (user) => {
  return {
    type: USER_FIND,
    payload: user,
  };
};
