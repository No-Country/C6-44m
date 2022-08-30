import React,{useState} from "react";
import { Button,Form } from "semantic-ui-react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { loginApi } from "../../../api/Auth/user";


export const Login = (props) => {

  // funcion que modifica un useState del basicModal para cerra el Modal.
  const { onCloseModal} = props;

  // UseState para utilizar el spinner.
  const [loading, setLoading] = useState(false);

  const {login,auth} = useAuth();

  console.log(auth);

  //constante que almacena el hooks de Formik.
  const formik = useFormik({
    initialValues:{email: "",password: "",},
    validationSchema:Yup.object(
      {
        email:Yup.string().email("Asegúrese de que el correo sea válido").required("Ambos campos son obligatorios"),
        password: Yup.string().required(true),
      }
    ),
    onSubmit: async (formData)=>{ 
      setLoading(true);
      const response = await loginApi(formData);
      if(response?.token){
        login(response.token); 
        toast.success("usuario logeado");
        onCloseModal();
      }else{
        toast.error("El email o la contraseña son incorrectos");
      }
      setLoading(false);
    }
  })

  return (
    <div className="auth">
      <Form className="formContent" onSubmit={formik.handleSubmit}>
          <Form.Input name="email" type='text' placeholder='Correo Electronico' onChange={formik.handleChange} error={formik.errors.email}/>
          <Form.Input  name="password" type='password' placeholder='Contraseña' onChange={formik.handleChange} error={formik.errors.password} />
        <div>
          <Button loading={loading} type="submit" className="Button-login" onClick={formik.handleSubmit}>
            Entrar
          </Button>
        </div>
      </Form>
    </div>
  );
};