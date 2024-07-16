import React, { useState } from "react";
import Form1 from "./Form1";
import "./form.css";
function Form() {
  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    gender: "",
    city: "",
    isUpdate: false,
  });
  let [dropDownCity, setCity] = useState([
    { id: 1, name: "Kanheri" },
    { id: 2, name: "Latur" },
    { id: 3, name: "Ausa"},
  ]);
  let [form, setForm] = useState([]);
  function FirstName(e) {
    setUser({
      ...user,
      firstName: e.target.value,
    });
  }
  function LastName(e) {
    setUser({
      ...user,
      lastName: e.target.value,
    });
  }
  function Email(e) {
    setUser({
      ...user,
      email: e.target.value,
    });
  }
  function MobileNo(e) {
    setUser({
      ...user,
      mobileNo: e.target.value,
    });
  }
  function Gender(e) {
    setUser({
      ...user,
      gender: e.target.value,
    });
  }
  function City(e) {
    setUser({
      ...user,
      city: e.target.value,
    });
  }

  function UpdateData() {
    let b = form.map((e) => {
      if (e.email == user.email) {
        return {
          ...e,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          mobileNo: user.mobileNo,
          city: user.city,
          isUpdate: false,
        };
      } else {
        return e;
      }
    });
    setForm(b);
  }

  function addRecord() {
    setForm(
      [...form, user],   // adding new object to form array or state
    ); 

    setUser({
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      gender: "",
      city: "",
    })
  }

  let Submit = () => {
      if (user.isUpdate) {
        UpdateData();
      } else {
        addRecord();
      }
  };

  /** Delete records */

  let deleteItems = (email) => {
    let a = form.filter((ele) => {
      return ele.email != email;
    });
    setForm(a);
  };

/** Update records */

  let updateItem = (e) => {
    setUser({
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      mobileNo: e.mobileNo,
      gender: e.gender,
      city: e.city,
      isUpdate: true,
    });
  };
  return (
    <div className="maincontainer">
      <h1>Form</h1>
      <label>First Name:</label>
      <input
        type="text"
        value={user.firstName}
        onChange={(e) => FirstName(e)}
      />
      <br></br>
      <label>Last Name:</label>
      <input type="text" value={user.lastName} onChange={(e) => LastName(e)} />
      <br></br>
      <label>Email:</label>
      <input
        type="text"
        className="inpt3"
        value={user.email}
        disabled={user.isUpdate}
        onChange={(e) => Email(e)}
      />
      <br></br>
      <label>Mobile No:</label>
      <input type="text" value={user.mobileNo} onChange={(e) => MobileNo(e)} />
      <br></br>
      <div className="genderContainer">
        <label>Gender:</label>
        <input
          className="male"
          type="radio"
          name="gender"
          value="male"
          checked={user.gender === "male"}
          onChange={(e) => Gender(e)}
        />
        <label>Male</label>
        <br></br>
        <input
          className="female"
          type="radio"
          name="gender"
          value="female"
          checked={user.gender === "female"}
          onChange={(e) => Gender(e)}
        />
        <label>Female</label>
        <br></br>
        <input
          className="other"
          type="radio"
          name="gender"
          value="other"
          checked={user.gender === "other"}
          onChange={(e) => Gender(e)}
        />
        <label>Other</label>
        <br></br>
      </div>
      <div className="submitContainer">
        <select value={user.city} onChange={(e) => City(e)}>
          <option value="" disabled>
            Select city
          </option>
          {dropDownCity.map((ele) => (
            <option key={ele.id}>{ele.name}</option>
          ))}
        </select>

        <br></br>
      </div>
      <button onClick={Submit} className="btn btn-primary mt-2"  >
        {user.isUpdate ? "Update" : "Add"}
      </button>
      <Form1 data={form} deleteItems={deleteItems} updateItem={updateItem} />
    </div>
  );
}
export default Form;
