import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Link to={"/form"}>Form</Link>{" "}
        <Link to={"/cal"}>Calculator</Link>      

    </div>
  )
}

export default Layout