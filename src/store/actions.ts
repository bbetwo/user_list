import { ProfileTypes } from "../components/ProfileForm/ProfileForm";
import { userGenerate } from "../utils/userGenerate";
import { USER_DATA, USER_FIND, USER_EDIT } from "./actionsType";

export const userEdit = (user:ProfileTypes) => {
  return {
    type: USER_EDIT,
    payload: user,
  };
};

export const userData = (count:number) => {
  return {
    type: USER_DATA,
    payload: userGenerate(count),
  };
};

export const userFind = (user:ProfileTypes) => {
  return {
    type: USER_FIND,
    payload: user,
  };
};
