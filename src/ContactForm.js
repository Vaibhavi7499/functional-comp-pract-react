import React, { useEffect, useState } from "react";
import style from "./userForm.module.css";
import axios from "axios";
import { Contact_API_URL } from "./API";
import { useNavigate, useParams } from "react-router-dom";

function ContactForm() {
  let [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();
  const params = useParams();

  function getName(e) {
    setContact({
      ...contact,
      name: e.target.value,
    });
  }

  function getEmail(e) {
    setContact({
      ...contact,
      email: e.target.value,
    });
  }

  function addContact() {
    axios({
      url: Contact_API_URL,
      method: "POST",
      data: contact,
    })
      .then((res) => {
        navigate("/contactlist");
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  function updateContact() {
    axios({
      url: Contact_API_URL + "/" + params.id,
      method: "PUT",
      data: contact,
    }).then((res)=>{
      navigate("/contactlist")
    })
  }

  useEffect(()=>{
    if(params.id){
        axios.get(Contact_API_URL + "/" + params.id).then((res)=>{
          setContact({
            name:res.data.name,
            email:res.data.email
          })
        })
    }
  },[params.id])

  let add = () => {
    if(contact.name == "" && contact.email == ""){
    alert("Oops! Something went wrong..!!!  Please enter the Name and Email")
    }else{
      if (params.id) {
        updateContact()
      } else {
        addContact();
      }
    }
    
  };
  return (
    <div className={style.centerDiv}>
      <h1>Contact Manager</h1>
      <h3>{params.id ? "Edit" : "Add"} Contact</h3>
      <label>Name</label>
      <br></br>
      <input type="text" value={contact.name} onChange={(e) => getName(e)} />
      <br></br>
      <label className="mt-4">Email</label>
      <br></br>
      <input type="text" value={contact.email} onChange={(e) => getEmail(e)} />
      <br></br>
      <button className=" btn btn-primary mt-4" onClick={add}>
        {params.id ? "Update" : "Add"}
      </button>
    </div>
  );
}
export default ContactForm;
