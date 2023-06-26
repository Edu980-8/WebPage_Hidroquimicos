import React from "react";
import "./aboutus.css";
import { Link } from "react-router-dom";

const aboutus = () => {
  return (
    <div className="container-total-about-us">
      <p className="parrafos_internos">
        <Link className="headers_about_us" to="/">
          Home
        </Link>
      </p>

      <div className="container__services">
        <p className="parrafos_internos">
          <Link className="headers_about_us" to="/services">
            Servicios
          </Link>
        </p>
      </div>
      <div className="container_who_we_are">
        <h2>¿Quienes Somos?</h2>
        <p>
          Somos una empresa con especialistas en tratamiento químico de aguas
          residuales, industriales, domesticas y potables. Con amplio portafolio
          de productos para los requerimientos de la industria actual. Nuestra
          experiencia: Más de 15 años en formulación, comercialización y puesta
          en marchas de diferentes tratamientos químicos nos permite fundar
          Hidroquímicos en busca de transmitir nuestro conocimiento a nuestros
          clientes y lograr con esto un beneficio mutuo, mientras cuidamos el
          medio ambiente.
        </p>
      </div>
    </div>
  );
};

export default aboutus;
