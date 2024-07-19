import React, { useEffect, useState } from "react";
import { Student_API_URL } from "./API";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentList() {
  let [studentInfo, setStudentInfo] = useState([]);
const navigate=useNavigate();


  function getStudentData() {
    axios
      .get(Student_API_URL)
      .then((res) => {
        setStudentInfo(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  useEffect(() => {
    getStudentData();
  }, []);

  let deleteItem=(id)=>{
axios({
  url:Student_API_URL + "/" + id,
  method:"DELETE",
}).then((res)=>{
  getStudentData()
})
  }
  let updataItem=(obj)=>{
    navigate("/studentform/" + obj.id)
  }
  return (
    <div>
      <h1>Student List</h1>
      <table className="table mt-5 ">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Address</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentInfo.map((e) => (
            <tr>
              <td>{e.studentName}</td>
              <td>{e.address}</td>
              <td>{e.mobileNo}</td>
              <td>{e.email}</td>
              <td>
                <button className="btn btn-success" onClick={()=>updataItem(e)}>update</button>{" "}
                <button className="btn btn-danger" onClick={()=>deleteItem(e.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
