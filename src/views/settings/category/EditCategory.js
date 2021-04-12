import React, { useState, useEffect } from "react";
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
import { editCategoryRecord } from "../../../actions/categoryAction";
import { Link, useHistory } from "react-router-dom";

const EditCategory = (props) => {
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [activeStatus, setactiveStatus] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;
    const name = props.match.params.name;
    const status = props.match.params.status;
    debugger;
    if (status === "Y") {
      setactiveStatus(true);
    }
    setCategoryId(id);
    setCategoryName(name);
  }, [props]);

  const toggleChange = () => {
    setactiveStatus(!activeStatus);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (categoryId === "") {
        setError("Please enter category id");
        console.log(error);
      } else if (categoryName === "") {
        setError("Please enter category name");
      } else {
        await dispatch(
          editCategoryRecord(categoryId, categoryName, activeStatus)
        );
        setError(null);
        history.push("/category/list");
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
            Edit
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
                  onChange={(e) => setCategoryName(e.target.value.trim())}
                  handleKeyDown={(e) => handleKeyDown(e)}
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

export default EditCategory;
