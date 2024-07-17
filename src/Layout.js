import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
        {/* <Link to={"/form"}>Form</Link>{" "} &nbsp;
        <Link to={"/cal"}>Calculator</Link>   {" "} &nbsp;   */}
        <Link to={"/userform"}>User Form</Link>   {" "}  &nbsp; 
        <Link to={"/userlist"}>User List</Link>      
        {/* <Link to="/usestate">useState</Link>{" "}&nbsp;
        <Link to="/useeffect">useEffect</Link> */}
    </div>
  )
}

export default Layout