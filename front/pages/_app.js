import React,{useMemo,useEffect,useState} from 'react';
import { useRouter } from 'next/router';

import "../scss/global.scss";
import 'semantic-ui-css/semantic.min.css';

// packete para decodificar el jwt.
import jwtDecode from 'jwt-decode';

//Importamos el objeto que con la funcion CreateContext genera un objeto el contexto general.
import AuthContext from "../context/AuthContext";

//importamos la funcion que almacena token en localStorage.
import { setToken,getToken,removeToken } from '../api/token';


// packete para mostrar mensajes en consola.
import {ToastContainer} from'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {

  const [auth,setAuth]=useState(undefined);
  //Nos ayuda a ejecutar el useEffect que actualiza el contexto general.
  const [realoadUser,setRealoadUser]=useState(false);
  //Extraemos el router de nex/router
  const router = useRouter();

  // Obtiene el token y si existe setea el token en nuestro stado global. Tiene implementado su recarga.
  useEffect(() => {
    const token= getToken();
    if(token){
      //setea un contexto general.
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
    }else{
      setAuth(null);
    }
    setRealoadUser(false)
  },[realoadUser]);

  const login=(token)=>{
    //setea el token en el localstorage.
    setToken(token);

    setAuth({
      token,
      idUser: jwtDecode(token).id,
      nombre: jwtDecode(token).nombre,
    });
  }
  // funcion de logout.
  const logout=()=>{
    if(auth){
      removeToken();
      setAuth(null); // Borra datos del usuario del context general.
      router.push('/');
    }
  }

  
  // Almacena los valores de auth apra evitar que la pagina recarge constantemente toda la aplicacion.
  const authData= useMemo(
    () => ({
      auth,
      login,
      logout,
      setRealoadUser,
    }),[auth]
  );

  if(auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  );
}
