import React, { useEffect, useState } from "react";
import style from "./userForm.module.css";
import axios from "axios";
import { Contact_API_URL } from "./API";
import { useNavigate } from "react-router-dom";

function ContactList() {
  let [getContact, setGetContact] = useState([]);
  let [search, setSearch] = useState("");
  const navigate = useNavigate();

  function getInptContact() {
    axios.get(Contact_API_URL).then((res) => {
      setGetContact(res.data);
    });
  }

  useEffect(() => {
    getInptContact();
  }, []);

  let deleteContact = (id) => {
    axios({
      url: Contact_API_URL + "/" + id,
      method: "DELETE",
    }).then((res) => {
      getInptContact();
    });
  };

  let updateContact = (obj) => {
    navigate("/contactform/" + obj.id);
  };

  let addContact = () => {
    navigate("/contactform");
  };

  function searchContact(ele) {
    if(!ele?.target?.value) {
      getInptContact()
      setSearch('')
    } else {
      setSearch(ele?.target?.value)
      setGetContact(getContact.filter(x => x?.name.toLowerCase()?.includes(ele.target.value.toLowerCase())))
    }
  }

  return (
    <div className={style.centerDiv}>
      <h1>Contact Manager</h1>
      <span> Contact List</span> &nbsp; &nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary" onClick={addContact}>
        Add Contact
      </button>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            placeholder="Search by Name"
            onInput={(e) => searchContact(e)}
            value={search}
          />
    
        </form>
      </nav>
      <ul className="list-group list-group-flush mt-3">
        {getContact.map((e) => (
          <div key={e.id}>
            <li className="list-group-item" key={e.id}>
              <h3>{e.name}</h3>
              {e.email} &nbsp;&nbsp;
              <span className={style.btns}>
                <button
                  className="btn btn-success"
                  onClick={() => updateContact(e)}
                >
                  update
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteContact(e.id)}
                >
                  delete
                </button>
              </span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
