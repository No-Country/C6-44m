import React from 'react';
import {Login} from "../../views/auth/Login/Login";


export default function Auth(props) {
  const {onCloseModal} = props;
  return (
    <Login onCloseModal={onCloseModal} /> 
  )
}
