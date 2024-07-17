import React, { useEffect, useState } from "react";
import { API_URL } from "./API";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "./userForm.module.css";

function UserForm() {
  let [employeeData, setEmpData] = useState({
    empName: "",
    empAddress: "",
    empMobileNo: "",
    empEmail: "",
  });
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params?.id) {
      axios.get(API_URL + "/" + params.id).then((res) => {
        setEmpData({
          empName: res.data.empName,
          empAddress: res.data.empAddress,
          empMobileNo: res.data.empMobileNo,
          empEmail: res.data.empEmail,
        });
      });
    }
  }, [params.id]);


  function getEmpName(e) {
    setEmpData({
      ...employeeData,
      empName: e.target.value,
    });
  }

  function getEmpAddress(e) {
    setEmpData({
      ...employeeData,
      empAddress: e.target.value,
    });
  }

  function getEmpMobileNo(e) {
    setEmpData({
      ...employeeData,
      empMobileNo: e.target.value,
    });
  }

  function getEmpEmail(e) {
    setEmpData({
      ...employeeData,
      empEmail: e.target.value,
    });
  }

  let addEmpData = () => {
    if (params.id) {
      axios({
        url: API_URL + "/" + params.id,
        method: "PUT",
        data: employeeData,
      }).then((res) => {
        navigate("/userlist");
      });
    } else {
      axios({
        url: API_URL,
        method: "POST",
        data: employeeData,
      }).then((res) => {
        navigate("/userlist");
      });
    }
  };
  
  return (
    <div className="container">
      <h1>{params?.id ? "Update" : "Add"} Employee</h1>
      <div className={style.centerDiv}>
        <div className="mb-3 form-group">
          <label className="form-label">Employee Name</label>
          <input
            type="text"
            className="form-control"
            value={employeeData.empName}
            onChange={(e) => getEmpName(e)}
          />
        </div>

        <div className="mb-3 form-group">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            value={employeeData.empAddress}
            onChange={(e) => getEmpAddress(e)}
          />
        </div>

        <div className="mb-3 form-group">
          <label className="form-label">Mobile No</label>
          <input
            type="text"
            className="form-control"
            value={employeeData.empMobileNo}
            onChange={(e) => getEmpMobileNo(e)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            value={employeeData.empEmail}
            onChange={(e) => getEmpEmail(e)}
          />
        </div>

        <button className="btn btn-primary mt-3" onClick={addEmpData}>
          {params?.id ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default UserForm;
