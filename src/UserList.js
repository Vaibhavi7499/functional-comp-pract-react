import React, { useEffect, useState } from "react";
import { API_URL } from "./API";
import axios from "axios";
function UserList() {
  let [userInfo, setUserInfo] = useState([]);
  function getUserData() {
    axios
      .get(API_URL)
      .then((userRes) => {
        setUserInfo(userRes.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <table className="table mt-5 ">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Address</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((e) => (
            <tr>
              <td>{e.empName}</td>
              <td>{e.empAddress}</td>
              <td>{e.empEmail}</td>
              <td>{e.empMobileNo}</td>
              <td>
                <button className="btn btn-success">update</button>{" "}
                <button className="btn btn-danger">delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
