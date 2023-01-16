import React, { useState } from "react";
import "./estilos/Navbar.css";
import { Link } from "react-router-dom";
import logo from "./estilos/COLEGIO.png";
import Contacto from "./Contacto";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  const [modal, setModal] = useState(false);
  const abrirModal = (e) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <div>
      <nav className="nav">
        <div className="div-img">
          <img className="img-nav" src={logo} alt="logo-colegio" />
        </div>

        <div className={`links ${clicked ? "active" : ""}`}>
          <Link to={"/"}>
            <button onClick={handleClick} className="btn-nav">
              HISTORIA
            </button>
          </Link>
          <Link to={"/Niveles"}>
            <button onClick={handleClick} className="btn-nav">
              NIVELES
            </button>
          </Link>
          <Link to={"/Institucional"}>
            <button onClick={handleClick} className="btn-nav">
              INSTITUCIONAL
            </button>
          </Link>
          <Link to={"/Actividades"}>
            <button onClick={handleClick} className="btn-nav">
              ACTIVIDADES
            </button>
          </Link>
          <Link to={"/Deportes"}>
            <button onClick={handleClick} className="btn-nav">
              DEPORTES
            </button>
          </Link>
          <button className="btn-nav" onClick={(e) => abrirModal(e)}>
            CONTACTANOS
          </button>
        </div>
      </nav>
      <Contacto setModal={setModal} modal={modal} />
    </div>
  );
}

/* const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #114d4d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -2000px;

    margin-left: -2000px;
    margin-right: -2000px;
    text-align: center;
    transition: all 1.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 1252px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 15%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 1252px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #114d4d;
  position: absolute;
  top: -1200px;

  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 1.2s ease;

  &.active {
    border-radius: 0%;
    top: 0;
    left: 0;
    right: 0px;

    width: 100%;
    height: 550%;
  }
`; */
