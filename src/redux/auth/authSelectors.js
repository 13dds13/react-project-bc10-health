export const getIsAuth = (state) => state.auth.isAuth;
export const getRefreshToken = (state) => state.auth.authData.refreshToken;
export const getAccessToken = (state) => state.auth.authData.accessToken;
export const getSid = (state) => state.auth.authData.sid;
export const getUserName = (state) => state.auth.authData.username;
