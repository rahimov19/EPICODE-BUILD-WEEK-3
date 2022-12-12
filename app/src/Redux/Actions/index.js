export const SAVE_USER = "SAVE_USER";

export const saveUserAction = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};
