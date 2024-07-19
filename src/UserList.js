import React, { useEffect, useState } from "react";
import { API_URL } from "./API";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UserList() {
  let [userInfo, setUserInfo] = useState([]);
  const navigate=useNavigate()
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
  function deleteItem(id){
    axios({
        url:API_URL+"/"+id,
        method:"DELETE"
    }).then((res)=>{
         getUserData();
    })
  }
  function updateItem(obj){
    navigate("/userform/"+obj.id)
  }
  return (
    <div>
      <table className="table mt-5 ">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>City</th>
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
              <td>{e.city}</td>
              <td>
                <button className="btn btn-success" onClick={()=>updateItem(e)}>update</button>{" "}
                <button className="btn btn-danger" onClick={()=>deleteItem(e.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
