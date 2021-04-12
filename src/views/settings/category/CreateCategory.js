import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CButton,
  CCardFooter,
  CForm,
  CInputCheckbox,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useDispatch } from "react-redux";
import { createCategoryRecord } from "../../../actions/categoryAction";
import { Link } from "react-router-dom";

const CreateCategory = () => {
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [activeStatus, setactiveStatus] = useState(true);
  const [error, setError] = useState("");

  const toggleChange = () => {
    setactiveStatus(!activeStatus);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (categoryName === "") {
        setError("Please enter category name");
        console.log(error);
      } else {
        await dispatch(
          createCategoryRecord(categoryId, categoryName, activeStatus)
        );
      }
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  const handleKeyDown = async (e) => {
    e.preventDefault();
    const trimmedText = e.target.value.trim();
    if (e.key === "Enter" && trimmedText) {
      await submitHandler(e);
    }
  };
  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard>
          <CCardHeader>
            Add
            <small> Category</small>
            <Link className="btn btn-primary btn-sm" to={`/category/list`}>
              List
            </Link>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={(e) => submitHandler(e)}>
              <CFormGroup>
                <CLabel htmlFor="id">Id</CLabel>

                <CInput
                  id="id"
                  placeholder="Id will generate automatically"
                  readOnly={true}
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="name">Name</CLabel>
                <CInput
                  id="name"
                  placeholder="Enter category name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e)}
                />
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Active</CLabel>
                </CCol>

                <CCol md="9">
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      id="checkbox3"
                      name={activeStatus}
                      checked={activeStatus}
                      onChange={() => toggleChange(true)}
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>

              <CCardFooter>
                <CButton type="submit" size="sm" color="primary">
                  <CIcon name="cil-scrubber" /> Submit
                </CButton>
                <CButton type="reset" size="sm" color="danger">
                  <CIcon name="cil-ban" /> Reset
                </CButton>
              </CCardFooter>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CreateCategory;
