import { baseUrl } from "../../axios/endPoints";
import { WebService } from "../../axios/webServices";
import { ActionTypes } from "../../constants/ActionTypes";

export const getEmailBody = (id) => async (dispatch) => {
  dispatch({
    type: ActionTypes.GET_EMAIl_DETAILS_START,
  });
  try {
    const result = await WebService.get(baseUrl, { params: { id } });
    const { status, data } = result;
    if (status >= 200 && status < 300) {
      dispatch({
        type: ActionTypes.GET_EMAIl_DETAILS_SUCCESS,
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
