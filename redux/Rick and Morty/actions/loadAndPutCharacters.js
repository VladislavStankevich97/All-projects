import { PUT_CHARACTERS, LOAD_CHARACTERS, REMEMBER_PAGE } from "./constants";

export const rememberPage = (page) => {
  return {
    type: REMEMBER_PAGE,
    page,
  };
};

export const putCharacters = (dataFromServer) => {
  return {
    type: PUT_CHARACTERS,
    payload: dataFromServer,
  };
};

export const loadCharacters = (page, status, species, gender) => {
  return {
    type: LOAD_CHARACTERS,
    page,
    status,
    species,
    gender,
  };
};
