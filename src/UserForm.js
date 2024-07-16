import React, { useState } from "react";
import { API_URL } from "./API";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserForm() {
  let [employeeData, setEmpData] = useState({
    empName: "",
    empAddress: "",
    empMobileNo: "",
    empEmail: "",
  });
  const navigate=useNavigate()

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
    axios({
      url: API_URL,
      method: "POST",
      data: employeeData,
    }).then((res)=>{
        console.log(res)
        navigate("/userlist")
    });
  };
  console.log(employeeData);
  return (
    <div>
      <label>Employee Name:</label>
      <input
        type="text"
        className="mt-4"
        value={employeeData.empName}
        onChange={(e) => getEmpName(e)}
      ></input>
      <br></br>
      <label>Address:</label>
      <input
        type="text"
        className="mt-4"
        value={employeeData.empAddress}
        onChange={(e) => getEmpAddress(e)}
      ></input>
      <br></br>
      <label>Mobile No:</label>
      <input
        type="text"
        className="mt-4"
        value={employeeData.empMobileNo}
        onChange={(e) => getEmpMobileNo(e)}
      ></input>
      <br></br>
      <label>Email:</label>
      <input
        type="text"
        className="mt-4"
        value={employeeData.empEmail}
        onChange={(e) => getEmpEmail(e)}
      ></input>
      <br></br>
      <button className="btn btn-info mt-3" onClick={addEmpData}>
        Add
      </button>
    </div>
  );
}

export default UserForm;
