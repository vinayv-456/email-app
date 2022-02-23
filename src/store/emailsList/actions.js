import { baseUrl } from "../../axios/endPoints";
import { WebService } from "../../axios/webServices";
import { ActionTypes } from "../../constants/ActionTypes";

export const getEmails = (pageNo) => async (dispatch) => {
  dispatch({
    type: ActionTypes.GET_EMAILS_START,
  });
  try {
    const result = await WebService.get(baseUrl, { params: { page: pageNo } });
    const { status, data } = result;
    if (status >= 200 && status < 300) {
      dispatch({
        type: ActionTypes.GET_EMAILS_SUCCESS,
        payload: data,
      });
    } else {
      throw result;
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: ActionTypes.GET_EMAILS_FAILURE, payload: e });
  }
};

export const setActiveEmailItem = (id) => async (dispatch) => {
  dispatch({
    type: ActionTypes.SET_ACTIVE_EMAIL_ITEM,
    payload: id,
  });
};

export const setActiveEmailFilter = (filterBy) => async (dispatch) => {
  dispatch({
    type: ActionTypes.SET_ACTIVE_EMAIL_FILTER,
    payload: filterBy,
  });
};

export const setEmailCategory = (payload) => async (dispatch) => {
  dispatch({
    type: ActionTypes.SET_EMAIL_CATEGORY,
    payload,
  });
};
