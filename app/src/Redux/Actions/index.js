export const SAVE_USER = "SAVE_USER";
export const SAVE_USERS = "SAVE_USERS";
export const GUEST_USER = "GUEST_USER";

export const guestUserAction = (guest) => {
  return {
    type: GUEST_USER,
    payload: guest,
  };
};

export const saveUserAction = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};
export const saveUsersAction = (users) => {
  return {
    type: SAVE_USERS,
    payload: users,
  };
};
