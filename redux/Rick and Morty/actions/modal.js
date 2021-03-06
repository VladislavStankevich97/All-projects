import { SHOW_MODAL, HIDE_MODAL } from "./constants";

export const showModal = (payload) => {
  console.log(payload)
  return {
    type: SHOW_MODAL,
    payload,
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};
