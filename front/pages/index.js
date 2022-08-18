import Head from "next/head";
import BasicLayout from "../components/BasicLayout/BasicLayout";

export default function Home() {
  return (
    <BasicLayout>
      <Head>
        <title>Mundo Cruch | Nuestro Gym</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Gym para todas las edades..." />
        <meta name="author" content="Nombre del autor" />
      </Head>
      <div className="home">
        <h1>contenido pagina</h1>
        <h1>contenido pagina</h1>
        <h1>contenido pagina</h1>
        <h1>contenido pagina</h1>
        <h1>contenido pagina</h1>
        <h1>contenido pagina</h1>
        <h1>contenido pagina</h1>
        <h1>Agregado de sandbox</h1>
      </div>
    </BasicLayout>
  );
}
