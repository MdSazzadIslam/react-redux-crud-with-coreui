import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_ERROR,
  EDIT_CATEGORY,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
} from "../constants/categoryConstant";
import categoryService from "../services/categoryService";

export function createCategoryRecord(categoryId, categoryName, activeStatus) {
  return async (dispatch) => {
    dispatch(createCategory());
    await categoryService
      .createCategory(categoryId, categoryName, activeStatus)
      .then(
        (res) => {
          if (res === undefined) {
            dispatch(createCategoryError("Something went wrong!!!"));
          } else {
            dispatch(createCategorySuccess(res.data));
          }
        },
        (err) => {
          dispatch(createCategoryError(err));
        }
      );
  };
}
export function createCategory() {
  return {
    type: CREATE_CATEGORY,
  };
}

export function createCategorySuccess(success) {
  return {
    type: CREATE_CATEGORY_SUCCESS,
    payload: { success },
  };
}

export function createCategoryError(error) {
  return {
    type: CREATE_CATEGORY_ERROR,
    payload: { error },
  };
}

export function editCategoryRecord(categoryId, categoryName, activeStatus) {
  return async (dispatch) => {
    dispatch(editCategory());
    await categoryService
      .editCategory(categoryId, categoryName, activeStatus)
      .then(
        (res) => {
          if (res === undefined) {
            dispatch(editCategoryError("Something went wrong!!!"));
          } else {
            dispatch(editCategorySuccess(res.data));
          }
        },
        (error) => {
          dispatch(editCategoryError(error));
        }
      );
  };
}
export function editCategory() {
  return {
    type: EDIT_CATEGORY,
  };
}

export function editCategorySuccess(success) {
  return {
    type: EDIT_CATEGORY_SUCCESS,
    payload: { success },
  };
}

export function editCategoryError(error) {
  return {
    type: EDIT_CATEGORY_ERROR,
    payload: { error },
  };
}

export function deleteCategoryRecord(id) {
  return async (dispatch) => {
    dispatch(deleteCategory());
    await categoryService.deleteCategory(id).then(
      (response) => {
        dispatch(deleteCategorySuccess(response.data));
      },
      (error) => {
        dispatch(deleteCategoryError(error));
      }
    );
  };
}
export function deleteCategory() {
  return {
    type: DELETE_CATEGORY,
  };
}

export function deleteCategorySuccess(success) {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    payload: { success },
  };
}

export function deleteCategoryError(error) {
  return {
    type: DELETE_CATEGORY_ERROR,
    payload: { error },
  };
}

export function getCategoryRecord() {
  debugger;
  return async (dispatch) => {
    dispatch(getCategory());
    return await categoryService
      .getCategory()
      .then((response) => dispatch(getCategorySuccess(response.data)))
      .catch((error) => dispatch(getCategoryError(error)));
  };
}

export function getCategory() {
  return {
    type: GET_CATEGORY,
  };
}

export function getCategorySuccess(success) {
  return {
    type: GET_CATEGORY_SUCCESS,
    payload: { success },
  };
}

export function getCategoryError(error) {
  return {
    type: GET_CATEGORY_ERROR,
    payload: { error },
  };
}
