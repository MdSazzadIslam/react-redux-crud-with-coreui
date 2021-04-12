import React, { useState, useEffect } from "react";
import {
  getCategoryRecord,
  deleteCategoryRecord,
} from "../../../actions/categoryAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from "@coreui/react";

const getBadge = (status) => {
  switch (status) {
    case "Y":
      return "success";
    case "N":
      return "secondary";

    default:
      return "primary";
  }
};
const fields = ["CATEGORY_ID", "CATEGORY_NAME", "ACTIVE_STATUS"];

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const getCategories = async () => {
    try {
      await dispatch(getCategoryRecord()).then((res) => {
        setCategories(res.payload.success);
        console.log(res.payload.success);
      });
    } catch (err) {
      console.warn("Something went wrong fetching the data...", err);
    }
  };

  useEffect(() => {
    try {
      getCategories();
    } catch (err) {
      console.warn("Something went wrong fetching the data...", err);
    }
  }, []);

  const deleteCategory = async (id) => {
    await dispatch(deleteCategoryRecord(id));
    await getCategories();
  };

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Category records
            <Link className="btn btn-primary btn-sm" to={`/category/create`}>
              Add
            </Link>
          </CCardHeader>

          <CCardBody>
            <CDataTable
              items={categories}
              fields={fields}
              columnFilter
              tableFilter
              dark
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots={{
                ACTIVE_STATUS: (item) => (
                  <td>
                    <CBadge color={getBadge(item.ACTIVE_STATUS)}>
                      {item.ACTIVE_STATUS}
                    </CBadge>
                    {/*   <CButton size="sm" color="info"> */}
                    <Link
                      size="sm"
                      color="info"
                      to={`/category/edit/${item.CATEGORY_ID}/${item.CATEGORY_NAME}/${item.ACTIVE_STATUS}`}
                    >
                      Edit
                    </Link>
                    {/*   </CButton> */}
                    <CButton
                      size="sm"
                      color="danger"
                      className="ml-1"
                      onClick={(e) => deleteCategory(item.CATEGORY_ID)}
                    >
                      Delete
                    </CButton>
                  </td>
                ),
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CategoryList;

/* const mapStateToProps = (state) => ({
  categories: state.categoryReducer.categories,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryRecord: () => dispatch(categoryAction.getCategoryRecord()),
    deleteCategoryRecord: (id) =>
      dispatch(subCategoryAction.deleteCategoryRecord(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList); */
