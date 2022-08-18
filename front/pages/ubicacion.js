import React,{Fragment} from 'react';
import BasicLayout from '../components/BasicLayout/BasicLayout';
import { Icon } from 'semantic-ui-react';

export default function ubicacion() {
  return (
      <BasicLayout>
        <h1 className="title">Ubicación</h1>
        <main className="contenedor">
          <section className="contenedor__secction">
            <h2>Gimnasio </h2>
            <div className="contenedor__secction--ubicacion">
              <Icon name="thumbtack" />
              <div>
                <h3>Buenos Aires - CABA</h3>
                <p>Av. Córdoba 5932</p>
              </div>
          
            </div>
          </section>
          <section className="contenedor__secction">
            <h2>Horarios </h2>
            <h3>Dias Normales</h3>
            <div>
              <p>
                <span>Lunes a Viernes:</span> 08:00 hs a 21:00 hs.
              </p>
              <p>
                <span>Sabado:</span> 08:00 hs a 18:00 hs.
              </p>
            </div>
            <h3>Feriados</h3>
            <div>
              <p>
                <span>Lunes a Viernes:</span> 08:00 hs a 13:00 hs.
              </p>
              <p>
                <span>Sabado:</span> Cerrado
              </p>
            </div>
          </section>
        </main>
      </BasicLayout>
  );
}
