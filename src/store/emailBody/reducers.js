import { ActionTypes } from "../../constants/ActionTypes";

const INTIAL_STATE = {
  emailDetails: [],
  emailDetailsLoading: false,
  emailDetailsError: "",
};

export const emailDetailsReducer = (state = INTIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_EMAIl_DETAILS_START:
      return { ...state, emailDetailsLoading: true };
    case ActionTypes.GET_EMAIl_DETAILS_SUCCESS:
      return { ...state, emailDetailsLoading: false, emailDetails: payload };
    case ActionTypes.GET_EMAILS_FAILURE:
      return {
        ...state,
        emailDetailsLoading: false,
        emailDetailsError: payload,
      };
    default:
      return state;
  }
};
