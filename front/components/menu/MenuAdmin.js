import React from 'react';
import { useRouter } from 'next/router';
import { Dropdown, Icon, Menu} from 'semantic-ui-react';

export default function MenuAdmin(props) {
    
    const {user}= props;
    console.log(user);
    const router = useRouter();
    return (
        <Menu>
            <Menu.Item className="menuAdmin__responsive">
                <Dropdown text='Administrar'>
                    <Dropdown.Menu>
                        <Dropdown.Item text='Alumnos' icon='react' onClick={() => router.push("/contacto")} />
                        <Dropdown.Item text='Profesores' icon='angular' onClick={() => router.push("/contacto")} />
                        <Dropdown.Item text='Actividades' icon='html5' onClick={() => router.push("/contacto")} />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            <Menu.Item className="menuAdmin">Alumnos</Menu.Item>
            <Menu.Item className="menuAdmin">Profesores</Menu.Item>
            <Menu.Item className="menuAdmin">Actividades</Menu.Item>
        </Menu>
    )
}
