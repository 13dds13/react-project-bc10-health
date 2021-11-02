export const getEatenProductsList = (state) => state.user.eatenProducts;
export const getDayId = (state) => state.user.daySummary.dayId;
export const getDaySummary = (state) => state.user.daySummary;
export const getUserStat = (state) => state.user.userData.userStat;
export const getNotAllowedProducts = (state) =>
  state.user.userData.notAllowedProducts;
export const getIsLoadingUserData = (state) => state.user.isLoading;
