import { COLORCHANGED, STATUSCHANGED } from "./actionType";

export const colorChanged = (changeType, color) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
