/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BasicLayout from "../components/BasicLayout/BasicLayout";
import Image from "next/image";
export default function contacto() {
  return (
    <BasicLayout>
      <div className="contacto__contenedor">
        <h2>CONTACTANOS</h2>
        <div className="contacto__info">
          <p>
            <Image src="/img/icons8-whatsapp.svg" width={20} height={20} />
            +54 (11) 5925576
          </p>
          <p>
            <Image src="/img/mail_black_24dp.svg" width={20} height={20} />
            info@gym.com
          </p>
        </div>
        <button type="submit">Contacto</button>
      </div>
    </BasicLayout>
  );
}
