import { addToast, removeToast } from "../features/toastSlice";

export const showToast =
  (message, type = "info", duration = 3000) =>
  (dispatch) => {
    const id = crypto.randomUUID();

    dispatch(addToast({ id, message, type }));

    setTimeout(() => {
      dispatch(removeToast(id));
    }, duration);
  };
