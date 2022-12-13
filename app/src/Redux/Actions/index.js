export const SAVE_USER = "SAVE_USER";
export const SAVE_USERS = "SAVE_USERS";
export const GUEST_USER = "GUEST_USER";
export const FETCH_USER = "FETCH_USER";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";

export const fetchAllUserAction = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch(saveUsersAction(data));
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUserAction = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch(saveUserAction(data));
        console.log(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

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
