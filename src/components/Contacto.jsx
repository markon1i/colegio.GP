import "./estilos/Contacto.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

export default function Contacto({ setModal, modal }) {
  const [errors, setErrors] = useState({
    nombre: "Debe ingresar su nombre",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [input, setInput] = useState({
    nombre: "",
    asunto: "",
    email: "",
    mensaje: "",
  });

  const navigate = useNavigate();
  const handleClose = () => setModal(false);

  const validador = (inputs) => {
    let validations = {};
    const nameExpresion = /[0-9/'0-9'/,*+._&=():;%$#!|-]/gi;
    const emailExpresion =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!inputs.nombre) {
      validations.nombre = "Debe ingresar su nombre";
    } else if (nameExpresion.test(inputs.nombre)) {
      validations.nombre = "Ingrese solo letras";
    } else if (!inputs.email) {
      validations.email = "Debe ingresar su email";
    } else if (!emailExpresion.test(inputs.email)) {
      validations.email = "Ingrese un email valido";
    } else if (nameExpresion.test(inputs.asunto)) {
      validations.asunto = "Ingrese solo letras";
    } else if (!inputs.asunto) {
      validations.asunto = "Debe ingresar un asunto";
    } else if (!inputs.mensaje) {
      validations.mensaje = "Debe ingresar un mensaje";
    }
    return validations;
  };

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    const errores = validador({ ...input, [e.target.name]: e.target.value });
    setErrors(errores);
  };

  const enviarEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y32ruoe",
        "template_fwl1mko",
        e.target,
        "gZs-ZYvFqsdiBtQap"
      )
      .then((res) => {
        console.log(res).catch((error) => console.log(error));
      });

    Swal.fire({
      title: "Mensaje enviado correctamente",
      icon: "success",
      confirmButtonColor: "#2718f7",
      background: "#23252E",
      color: "#fff",
      confirmButtonText: "Ok",
    }).then((result) => {
      setInput({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
      setErrors({
        nombre: "Debe ingresar su nombre",
        email: "",
        asunto: "",
        mensaje: "",
      });
      setModal(false);
      navigate("/");
    });
  };

  return (
    <Modal
      show={modal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="div-mayor">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <i className="modalTitle">Enviando Email a Colegio General Paz </i>
          </Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
            x
          </Button>
        </Modal.Header>

        <form onSubmit={enviarEmail} autoComplete="off">
          <Modal.Body>
            <div className="form-row">
              <div className="contenedorInpputss">
                <label className="tituloInput">
                  <b>Nombre</b>
                </label>
                <input
                  type="text"
                  onChange={(e) => handleOnChange(e)}
                  className="formEmail"
                  id="nombre"
                  name="nombre"
                  value={input.nombre}
                />
                {errors.nombre ? (
                  <p
                    style={{
                      color: "red",
                      marginTop: "5px",
                      marginBottom: "0",
                    }}
                  >
                    {errors.nombre}
                  </p>
                ) : null}
              </div>

              <div className="contenedorInpputss">
                <label className="tituloInput">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  onChange={(e) => handleOnChange(e)}
                  className="formEmail"
                  id="email"
                  name="email"
                  value={input.email}
                />
                {errors.email ? (
                  <p
                    style={{
                      color: "red",
                      marginTop: "5px",
                      marginBottom: "0",
                    }}
                  >
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="contenedorInpputss">
              <label className="tituloInput">
                <b>Asunto</b>
              </label>
              <input
                type="text"
                onChange={(e) => handleOnChange(e)}
                className="formEmail"
                id="asunto"
                name="asunto"
                value={input.asunto}
              />
              {errors.asunto ? (
                <p
                  style={{
                    color: "red",
                    marginTop: "5px",
                    marginBottom: "0",
                  }}
                >
                  {errors.asunto}
                </p>
              ) : null}
            </div>
            <div className="contenedorInpputss">
              <label className="tituloInput">
                <b>Mensaje</b>
              </label>
              <input
                type="text"
                onChange={(e) => handleOnChange(e)}
                className="formEmail"
                name="mensaje"
                value={input.mensaje}
              ></input>
              {errors.mensaje ? (
                <p
                  style={{ color: "red", marginTop: "5px", marginBottom: "0" }}
                >
                  {errors.mensaje}
                </p>
              ) : null}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="ContenedorBoton">
              {!errors.nombre && !errors.email && !errors.mensaje ? (
                <button
                  variant="primary"
                  type="submit"
                  className="botoncito"
                  style={{
                    backgroundColor: "#23252E",
                    color: "#84c95f",
                    marginTop: "30px",
                    fontSize: "22px",
                    marginBottom: "30px",
                    cursor: "pointer",
                    transition: "all 500ms",
                    borderRadius: " 5px",
                    width: "200px",
                  }}
                >
                  Enviar
                </button>
              ) : (
                <button
                  variant="primary"
                  type="submit"
                  disabled
                  style={{
                    backgroundColor: "#23252E",
                    color: "grey",
                    marginTop: "30px",
                    fontSize: "22px",
                    marginBottom: "30px",
                    transition: "all 500ms",
                    borderRadius: " 5px",
                    width: "200px",
                  }}
                >
                  Enviar
                </button>
              )}
            </div>
          </Modal.Footer>
        </form>
      </div>
    </Modal>
  );
}
