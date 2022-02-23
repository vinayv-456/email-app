import { ActionTypes } from "../../constants/ActionTypes";
import { FILTER_BY } from "../../constants/general";

const INTIAL_STATE = {
  emailsList: [],
  emailsListLoading: false,
  emailsListError: "",
  activeEmailItem: "",
  activeEmailFilter: "",
  filters: {
    unread: [],
    read: ["1", "2"],
    favorites: [],
  },
};

export const emailsListReducer = (state = INTIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_EMAILS_START:
      return { ...state, emailsListLoading: true };
    case ActionTypes.GET_EMAILS_SUCCESS:
      return {
        ...state,
        emailsListLoading: false,
        emailsList: payload,
        filters: {
          ...state.filters,
          unread: payload.list
            .filter((e) => !state.filters.read.includes(e.id))
            .map((e) => e.id),
        },
      };
    case ActionTypes.GET_EMAILS_FAILURE:
      return { ...state, emailsListLoading: false, emailsListError: payload };
    case ActionTypes.SET_ACTIVE_EMAIL_ITEM:
      return { ...state, activeEmailItem: payload };
    case ActionTypes.SET_ACTIVE_EMAIL_FILTER:
      return { ...state, activeEmailFilter: payload };
    case ActionTypes.SET_EMAIL_CATEGORY:
      console.log(
        "state.filters[payload.catgeory]",
        payload.catgeory,
        payload.id,
        state.filters[payload.catgeory]
      );
      const res = {
        [payload.catgeory]: [...state.filters[payload.catgeory], payload.id],
      };

      if (payload.catgeory === FILTER_BY.READ) {
        res[FILTER_BY.UNREAD] = [
          ...state.filters[FILTER_BY.UNREAD].filter((id) => id !== payload.id),
        ];
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          ...res,
        },
      };
    default:
      return state;
  }
};
