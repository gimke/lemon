/**
 * Created by yanggang on 2018/10/31.
 */
import Common from "../common";

export const COMMON_SUCCESS = "COMMON_SUCCESS";
export const COMMON_FAIL = "COMMON_FAIL";

export const commonGet = () => (dispatch, getState) => {
    let query = `{
  commonQuery {
    controllerList
  }
}
`;
    Common.graphql({query}, (json, error, httpStatus) => {
        if (httpStatus === 200) {
            dispatch({
                type: COMMON_SUCCESS,
                httpStatus,
                data: json.data.commonQuery,
                receivedAt: Date.now()
            });
        } else {
            dispatch({
                type: COMMON_FAIL,
                httpStatus,
                receivedAt: Date.now()
            });
        }
    });
};

export default (state = {
                  commonRequest: Common.initRequest,
              },
              action) => {
    switch (action.type) {
        case COMMON_SUCCESS:
            return {
                ...state,
                commonRequest: {
                    ...state.commonRequest,
                    status: Common.status.SUCCESS,
                    httpStatus: 200,
                    lastUpdated: action.receivedAt,
                },
                ...action.data,
            };
        case COMMON_FAIL:
            return {
                ...state,
                commonRequest: {
                    ...state.commonRequest,
                    status: Common.status.FAILURE,
                    httpStatus: action.httpStatus,
                    lastUpdated: action.receivedAt,
                },
                ...action.data,
            };
        default:
            return state;
    }
};

