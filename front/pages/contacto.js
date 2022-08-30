import React from "react";
import BasicLayout from "../components/BasicLayout/BasicLayout";

export default function contacto() {
  return (
    <BasicLayout>
      <div className="contacto__contenedor">
        <h2>CONTACTANOS</h2>
        <div className="contacto__info">
          <p>
            <img src="/img/icons8-whatsapp.svg"/>
            +54 (11) 5925576
          </p>
          <p>
            <img src="/img/mail_black_24dp.svg"/>
            info@gym.com
          </p>
        </div>
        <button type="submit">Contacto</button>
      </div>
    </BasicLayout>
  );
}
