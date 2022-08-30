import React,{useState} from "react";
import { Button,Form ,Message} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import { loginApi } from "../../../api/Auth/user";

export const Login = (props) => {

  // funcion que modifica un useState del basicModal para cerra el Modal.
  const { onCloseModal } = props;

  // UseState para utilizar el spinner.
  const [loading, setLoading] = useState(false);

  //constante que almacena el hooks de Formik.
  const formik = useFormik(
    { 
      initialValues:initialValues(),
      validationSchema:Yup.object(validationSchema()), 
      onSubmit: async (values) => {
        setLoading(true); // iniciador de spinner de carga.
        const response = await loginApi(values); 
        setLoading(false); // fin de spinner de carga.
        if (response?.token) {
          localStorage.setItem("token", response.token);
          toast.success("Ingresando...");
          onCloseModal(false);
        } else {
          toast.error("Usuario o contraseña incorrrecto");
        }
      }, 
    }
  );

  

  return (
    <>
      <div className="auth">
        <Form className="formContent" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">E-mail</label>
            <Form.Input
              type="text"
              name="email"
              onChange={formik.handleChange}
              error={formik.errors.email}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <Form.Input
              className="form__input"
              type="password"
              name="password"
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            
          </div>
          <div>
            <Button type="submit" className="Button-login" onClick={formik.handleSubmit}>
              Entrar  
            </Button>  
          </div>
         
        </Form>
      </div>
    </>
  );
};



//funcion que retorna un objeto con los initialValues para usarse en useFormik.
function initialValues() {
  return {
    email: "",
    password: "",
  };
};

// funcion que retorna un objeto con valores validados con Yup para utilizarse como schema de useFormik.
function validationSchema(){
  return {
    email : Yup.string().email("Ingrese un email válido").required(true),
    password: Yup.string().required(true),
  };
}