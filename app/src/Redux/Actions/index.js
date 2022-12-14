export const SAVE_USER = "SAVE_USER";
export const SAVE_USERS = "SAVE_USERS";
export const GUEST_USER = "GUEST_USER";
export const FETCH_USER = "FETCH_USER";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const FETCH_EXPERIENCE = "FETCH_EXPERIENCE";
export const GET_POSTS = "GET_POSTS";
export const GET_MY_POST = "GET_MY_POST";
export const MY_POSTS = "MY_POSTS";

export const myPostsAction = (posts) => {
  return {
    type: MY_POSTS,
    payload: posts,
  };
};

export const getPostsAction = (posts) => {
  return {
    type: GET_POSTS,
    payload: posts,
  };
};

export const getMyPostAction = (post) => {
  return {
    type: GET_MY_POST,
    payload: post,
  };
};

export const fetchAllPostsAction = (posts) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch(getPostsAction(data.reverse()));
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchExperienceAction = (userId) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch(getExperienceAction(data));
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getExperienceAction = (experience) => {
  return {
    type: GET_EXPERIENCE,
    payload: experience,
  };
};

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
