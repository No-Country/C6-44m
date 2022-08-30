import { useContext } from "react";

import AuthContext from "../context/AuthContext";


//sacamos los datos del AuthContext Y los retornamos en una funcion
export default ()=>useContext(AuthContext);