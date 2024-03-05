import { httpClient } from '../constant'
import { createAction } from '@reduxjs/toolkit';

export const loginAction = createAction("AUTH.LOGIN");
export const loginErrorAction = createAction("AUTH.LOGIN_ERROR");
export const userDetailsAction = createAction("AUTH.USER_DETAILS");
export const loginResetAction = createAction("AUTH.LOGIN_RESET");

export const loginAsync = (loginData) => {
    return (dispatch) => {
        httpClient
            .get("/login", loginData)
            .then((response) => {
              console.log(response)
                if (response) {
                    dispatch(loginAction(response));
                }
            })
            .catch((reason) => {
                dispatch(loginErrorAction(reason.response));
            });
    };
};
export const userDetailsAsync = callback => {
  return (dispatch) => {
    httpClient
      .get("/v1/user-detail")
      .then((response) => {
        if (response) {
          dispatch(userDetailsAction(response));
          callback && callback(null, response.data);
        }
      })
      .catch((reason) => {
        dispatch(loginResetAction());
        callback && callback(true, null);
      });
  };
};

export const resetLoginActionAsync = () => {
    return (dispatch) => {
        dispatch(loginResetAction());
    };
};

export const logoutAsync = (loginData) => {
//   console.log("on logout");
//   console.log(loginData);
//   let data = new URLSearchParams(loginData).toString();
  return (dispatch) => {
      dispatch(loginResetAction());
    /* httpClient
      .get(`/v1/user/logout?${data}`)
      .then((response) => {
        if (response) {
          //   dispatch(loginResetAction());
          console.log(response);
        }
      })
      .catch((reason) => {
        // dispatch(loginErrorAction(reason.response));
        console.log(reason.response);
      }); */
  };
};


export const testAsync = () => {
  return (dispatch) => {
    httpClient
      .get("/api/signup/cedu")
      .then((response) => {
        if (response) {
          console.log(response)
        }
      })
      .catch((reason) => {
        dispatch(loginErrorAction(reason.response));
      });
  };
};