import React,{useState} from 'react';
import {Container,Menu,Grid,GridColumn,Icon} from "semantic-ui-react";
import BasicModal from "../../../Modal/BasicModal/BasicModal";
import Auth from '../../../Auth/Auth';

export default function MenuHome() {
    const [showModal, setshowModal] = useState(false); 

    const onShowModal = ()=> setshowModal(true);
    const onCloseModal = ()=> setshowModal(false);
  return (
    <div className='menu' >
        <Container>
            <Grid>
                <GridColumn className="menu__right" width={6}>
                    <h2>Lugar para mas cosas</h2>
                </GridColumn>   
                <GridColumn className="menu__left" width={10}>
                    <MenuOptions onShowModal={onShowModal} onCloseModal={onCloseModal}/>
                </GridColumn>
            </Grid>
        </Container>
        <BasicModal 
            show={showModal} 
            setShow={setshowModal} 
            title="Iniciar sesión"
            size="small"
        >
            <Auth onCloseModal={onCloseModal} />
        </BasicModal>
        
        
    </div>
  )
}

function MenuOptions(props){
    const {onShowModal,onCloseModal}=props;
    return(
        <div onClick={onShowModal}>
            <Icon name="user outline" onClick={onCloseModal}/>
            Mi cuenta
        </div>        
    )
}
