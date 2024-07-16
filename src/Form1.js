import React from "react";

function Form1(props) {
console.log(props)
// function deleteRow(email){
// props.deleteItems(email)
// }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Gender</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {props.data.map((e) => (
          <tr>
            
                <td key={e.id}>{e.firstName} {e.lastName}</td>
                <td key={e.id}>{e.email}</td>
                <td key={e.id}>{e.mobileNo}</td>
                <td key={e.id}>{e.gender}</td>
                <td key={e.id}>{e.city}</td>
                <td><button className="btn btn-success" onClick={()=>props.updateItem(e)}>update</button>{" "}<button className="btn btn-danger" onClick={()=>props.deleteItems(e.email)}>delete</button></td>
              
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form1;
