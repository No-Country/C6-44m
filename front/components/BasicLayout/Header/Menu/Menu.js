import React, { useState,useEffect } from "react";
import { Container, Grid, GridColumn, Icon,Button } from "semantic-ui-react";
import BasicModal from "../../../Modal/BasicModal/BasicModal";
import {Login} from "../../../../views/auth/Login/Login";
import useAuth from "../../../../hooks/useAuth";
import { getMeApi } from "../../../../api/Auth/user"; 
import MenuAdmin from "../../../menu/MenuAdmin";
import MenuAlumn from "../../../menu/MenuAlumn";

export default function MenuHome() {
  // useState para mostrar el BasicModal.
  const [showModal, setshowModal] = useState(false);

  // Extraemos del context con el hook el objeto que almacena el token.
  const {auth,logout} = useAuth();

  // useState que guarda el usuario.
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout, auth?.idUser);
      setUser(response);
    })()

  }, [auth?.idUser]);


  

  // funciones para cambiar el estado del BasicModal.
  const onShowModal = () => setshowModal(true);
  const onCloseModal = () => setshowModal(false);


  return (
    <div className="menu">
      <Container>
        <Grid>
          <GridColumn className="menu__right" width={8}>
            {user ? 
              ((user.Usuario.rol ==="admin" || user.Usuario.rol ==="subadmin") 
                ? (<MenuAdmin user={user} />) 
                : (<MenuAlumn user={user} />)
              )
              : 
              (<h3>Fitness Gym</h3>)
            } 
          </GridColumn>
          <GridColumn className="menu__left" width={8}>
            {auth ? (
              <Button onClick={logout} className="m-0">
                <Icon  name="power off"  />
                Cerrar sesión
              </Button>
              
            ) : (
              <Button onClick={onShowModal}>
                <Icon name="user outline" />
                Mi cuenta
              </Button>            
            )}
            
          </GridColumn>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setshowModal}
        title="Iniciar sesión"
        size="small"
        onCloseModal={onCloseModal}
      >
        <Login onCloseModal={onCloseModal} />
      </BasicModal>
    </div>
  );
}
