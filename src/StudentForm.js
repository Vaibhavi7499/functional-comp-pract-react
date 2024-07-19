import React, { useEffect, useState } from "react";
import style from "./userForm.module.css";
import axios from "axios";
import { Student_API_URL } from "./API";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function StudentForm() {
  let [student, setStudent] = useState({
    studentName: "",
    address: "",
    mobileNo: "",
    email: "",
  });

  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      axios.get(Student_API_URL + "/" + params.id).then((res) => {
        setStudent({
          studentName: res.data.studentName,
          address: res.data.address,
          mobileNo: res.data.mobileNo,
          email: res.data.email,
        });
      });
    }
  }, [params.id]);

  function getStudentName(e) {
    setStudent({
      ...student,
      studentName: e.target.value,
    });
  }

  function getStudentAddress(e) {
    setStudent({
      ...student,
      address: e.target.value,
    });
  }

  function getStudentMobNo(e) {
    setStudent({
      ...student,
      mobileNo: e.target.value,
    });
  }

  function getStudentEmail(e) {
    setStudent({
      ...student,
      email: e.target.value,
    });
  }

  function updateStudentData() {
    axios({
      url: Student_API_URL + "/" + params.id,
      method: "PUT",
      data: student,
    }).then((res) => {
      navigate("/studentlist");
    });
  }

  function addStudentData() {
    axios({
      url: Student_API_URL,
      method: "POST",
      data: student,
    }).then((res) => {
      navigate("/studentlist");
    });
  }

  let addEditStudentData = () => {
    if (params.id) {
      updateStudentData();
    } else {
      addStudentData();
    }
  };
  return (
    <div className="container">
      <h1> {params.id ? "Update" : "Add"} Student</h1>
      <div className={style.centerDiv}>
        <div className="mb-3 form-group">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            value={student.studentName}
            onChange={(e) => getStudentName(e)}
          />
        </div>

        <div className="mb-3 form-group">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            value={student.address}
            onChange={(e) => getStudentAddress(e)}
          />
        </div>

        <div className="mb-3 form-group">
          <label className="form-label">Mobile No</label>
          <input
            type="text"
            className="form-control"
            value={student.mobileNo}
            onChange={(e) => getStudentMobNo(e)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            value={student.email}
            onChange={(e) => getStudentEmail(e)}
          />
        </div>

        <button className="btn btn-primary mt-3" onClick={addEditStudentData}>
          {params.id ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default StudentForm;
