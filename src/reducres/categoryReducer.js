//////////////////CALLING NECESSARY ACTION TYPES/////////////////////////////
import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
} from "../constants/categoryConstant";
/////////////////END OF CALLING ACTION TYPES//////////////////////////////
const initialState = {
  categories: [],
  data: {},
  saving: false,
  saved: false,
  deleting: false,
  deleted: false,
  loading: false,
  loaded: false,
  error: null,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        saving: true,
        saved: false,
        error: false,
      };
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        saving: false,
        saved: true,
        data: action.payload.success,
        error: false,
      };
    case CREATE_CATEGORY_ERROR:
      return {
        ...state,
        saving: false,
        saved: false,
        error: true,
        data: {},
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        saving: true,
        saved: false,
        error: false,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        saving: false,
        saved: true,
        data: action.payload.success,
        error: false,
      };
    case DELETE_CATEGORY_ERROR:
      return {
        ...state,
        saving: false,
        saved: false,
        error: true,
        data: {},
      };

    case GET_CATEGORY:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
      };
    case GET_CATEGORY_SUCCESS:
      debugger;
      return {
        ...state,
        loading: false,
        loaded: true,
        categories: action.payload.success,
        error: false,
      };
    case GET_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true,
        categories: [],
      };

    default:
      return state;
  }
}
