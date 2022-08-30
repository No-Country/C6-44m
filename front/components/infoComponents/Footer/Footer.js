import Image from "next/image";

export const Footer = () => {
  return (
    <div className="footer_container">
      <h3>Crunch Fitness</h3>
      <p>
        Encontranos en nuestras redes sociales para conocer más sobre
        <br /> nuestra sede y poder contactarnos.
      </p>
      <div className="footer_container-icons">
      <Image
        src="/img/instagram-white.svg"
        alt="instagram"
        width="30"
        height="30"
      />
      <Image
        src="/img/facebook-white.svg"
        alt="instagram"
        width="30"
        height="30"
      />
      <Image
        src="/img/facebook-messenger-white.svg"
        alt="instagram"
        width="30"
        height="30"
      />
      <Image
        src="/img/whatsapp-white.svg"
        alt="instagram"
        width="30"
        height="30"
      />
      </div>
      <p>Todos los derechos reservados a Crunch Fitness ©2020-2021</p>
    </div>
  );
};
