import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Switch, FormControlLabel } from "@mui/material";

export const Register = (props) => {
  const [data, setData] = useState();

  const {ShowLoginForm}=props;

  useEffect(() => {
    fetch("endpoint-url")
      .then((response) => response.json())
      .then((data) => setData(data.result));
  }, []);

  const initialValues = {
    userName: "",
    password: "",
    email: "",
    role: "",
    provincia: "",
    ciudad: "",
    switch: false,
  };

  const required = "* Campo obligatorio";

  const validationSchema = () =>
    Yup.object().shape({
      userName: Yup.string()
        .min(4, "La cantidad mínima de caracteres es 4")
        .required(required),
      password: Yup.string().required(required),
      email: Yup.string().email("Debe ser un email válido").required(required),
      role: Yup.string().required(required),
      provincia: Yup.string().required(required),
      ciudad: Yup.string().required(required),
    });

  const onSubmit = () => {
    fetch("endpoint-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          userName: values.userName,
          password: values.password,
          email: values.email,
          role: values.role,
          provincia: values.continent,
          ciudad: values.region,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        // navigate("/registered/" + data?.result?.user?.teamID, {
        //   replace: true,
        // })
        alert("registrado")
      );
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, values, setFieldValue } = formik;

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario</label>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            value={values.userName}
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <div>
          <label>Repetir contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div>
          <label>Rol</label>
          <select
            name="role"
            onChange={handleChange}
            value={values.role}
          >
            <option value="">Seleccionar rol...</option>
            {data?.Rol?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Provincia</label>
          <select
            name="provincia"
            onChange={handleChange}
            value={values.provincia}
          >
            <option value="">Seleccionar provincia...</option>
            {data?.provincia?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
          <div>
            <label>Ciudad</label>
            <select
              name="ciudad"
              onChange={handleChange}
              value={values.ciudad}
            >
              <option value="">Seleccionar Ciudad...</option>
              {data?.ciudad?.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
        <button onClick={ShowLoginForm}>
            Ir al Login
        </button>
      </form>
    </div>
  );
};
