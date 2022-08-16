import React from 'react';
import Container from '@mui/material/Container';
import Header from './Header/Header';

export default function BasicLayout(props) {
  const {children}=props;
  return (
    <div className='body'>
      <Header className='header'/>
      <Container className='contenidoBasicLayout' maxWidth='lg'>
        {children}
      </Container>   
    </div>
      
  )
}
