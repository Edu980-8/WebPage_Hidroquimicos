import React, { useState } from "react";
import "./header.css";
// import telefono from "../Images/telefono.png";
import Content from "../content/content";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"


const Header = ({ element }) => {
  const [showContent, setShowContent] = useState(false);

  const handleToggleClick = () => {
    setShowContent(!showContent);
  };

  const handleMouseEnter = () => {
    setShowContent(true);
  };

  const handleMouseLeave = () => {
    setShowContent(false);
  };

  return (
    <div>
      <div className="div__navbar_parent">
        <p className="navbar__childs">
          <Link className="links" to="/about-us">
            Nosotros
          </Link>
        </p>

        <div className="click-products">
          <p
            className="navbar__childs products"
            onClick={handleToggleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Productos
          </p>
          {showContent && <Content setShowContent={setShowContent}/>}
        </div>

        <p className="navbar__childs">
          <Link className="links" to="/services">
            Servicios
          </Link>
        </p>
      </div>
      <div className="div__header_parent">
        <h1 className="div_title_header">HIDROQUÍMICOS SAS<br/> <img className="div_logo" alt="Logo de una pluma con agua" src={logo}></img></h1>
        <div className="div_title_content">
          <br/>
          <h2 className="div_title_content_title">
            Somos apasionados por el cuidado del medio ambiente.
          </h2>
          <p className="div_info_header">
            Combinamos ingeniería y experiencia técnica para el desarrollo de
            nuestras líneas de productos pensando siempre en el compromiso con
            nuestros clientes.
          </p>
        </div>
        <div className="div_contact_header">
          <h4 className="header__content_contact">
            Contacto
            {element}
            <div className="phones">
              {"\n"} +60(1) - 2252502
              {"\n"} 310-3071129
              {"\n"} 321-2689010
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
