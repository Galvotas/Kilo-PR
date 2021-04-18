import { Action } from "../actions";
import { ActionTypes } from "../action-types";

interface IBoardData {
  loading: boolean;
  error: null | boolean;
  data: [] | unknown;
}

const initialState: IBoardData = {
  loading: false,
  error: null,
  data: [],
};

export const covidReducer = (
  state = initialState,
  action: Action
): IBoardData => {
  switch (action.type) {
    case ActionTypes.COVID_DATA_BY_COUNTRY:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.COVID_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ActionTypes.COVID_DATA_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
