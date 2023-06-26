import React from 'react'
import "./servicios.css"
import { Link } from "react-router-dom";

const servicios = () => {
  return (
    <div className="container__last">
      <p className="title__navbar_1">
        <Link className="headers_about_us" to="/">
          Home
        </Link>
      </p>
      <p className='title__navbar_2'>
        <Link className="headers_about_us" to="/">
          Productos
        </Link> 
      </p>
    </div>
  )
}

export default servicios
