export const getIsAuth = (state) => state.auth.isAuth;
export const getRefreshToken = (state) => state.auth.authData.refreshToken;
export const getSid = (state) => state.auth.authData.sid;
export const getUserName = (state) => state.auth.authData.username;
export const getUserId = (state) => state.auth.authData.id;
export const getAuthError = (state) => state.auth.error;
