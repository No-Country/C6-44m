import React from 'react';
import { Container } from '@mui/material';
import Link from 'next/link';




export default function TopBar() {
  return (
    <Container maxWidth="lg" className="topbar">
      <Link href="/">
        <a>
          <img src="/img/LogoPagina.svg" />
        </a>
      </Link>

      <div className="topbar__menu">
        <Link href="/sinprejuicios">
          <a className="topbar-hashtag">#SINPREJUICIOS</a>
        </Link>
        <nav className="topbar__menu-options">
          <div>
            <Link href="/sinprejuicios">
              <a>Inicio</a>
            </Link>
          </div>
          <div>
            <Link href="/sinprejuicios">
              <a>Ubicacion</a>
            </Link>
          </div>
          <div>
            <Link href="/sinprejuicios">
              <a>Contacto</a>
            </Link>
          </div>
        </nav>
      </div>
    </Container>
  );
}

