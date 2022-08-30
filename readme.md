DOCUMENTACION:

#Titulo:            Crunch | Administración de gimnasios 

#Descripción:       Aplicación web full responsive enfocada a administradores para dar apoyo en gestión de alumnos y actividades recurrentes en un gimnasio. 

#Tecnologías:       ReactJs | NodeJs | MongoDB | NextJs  

#Roles{             

    Backend: Diego Dimitroff 
    Backend: Felipe Calderón 
    Frontend: Martín Hernández 
    Frontend: Lucas Abdala
}

#Deploy-Backend:    https://node-app-gym.herokuapp.com/ 

#Deploy-Frontend: 


BACKEND:
Arquitectura utilizada: La app se compone de un server.js que va a tener la funcionalidad de leer el puerto
el cual va a ser, por defecto el 3000 (en caso de agregarse uno diferente mediante variable global).
 Entre otras cosas la arquitectura esta prediseña con el objetivo de ser escalable en su DBS, pudiendo
agregare cuanta base de datos se requiera mediante un metodo que se encontrara en la clase Factory en el
factory.js. Esta funcionalidad se dará mediante parametro agregado al arrancar la applicacion: actualmente los
parametros disponibles seran "mongo" (la cual actua por defecto en caso de no colocar parametro alguno) y 
"file" como para comenzar el trabajo mediante el manejo de file system.

Integracion: El archivo factory.js cuenta con la utilizacion de un archivo estatico denominado
getInstance(), utilizando el patro de diseño Singleton a fin de requerir una unica vez en el server la instan-
ciacion del factory, y consecuentemente con ello todos sus metodos (es decir, en este caso, la DBS seleccionada)

Seguridad: Se utiliza como centro de accion un controller.js, el cual va a tomar los metodos requeridos para 
la obtencio de informacion de la dbs de un contenedor.js y este a su vez de un DAO.js pertinente. Mientras que
la logica se encontrara integrada en un service.js (el cual a su vez utilizara los metodos de la DBS utilizada)
todo esto se encontrara integrado segun la ruta selecionada.

Rutas: Las rutas PUBLICAS seran:
GET /
GET /contacto
GET /ubicacion

Rutas de ACCESO:
POST /login
POST /register



Rutas internas necesarias con TOKEN:
GET /users
POST /user
PUT /paymentUpdate

/activity/
/activity/:nombre
/activity/add
/activity/update
/activity/delete

1- LOGEO:
POST /login
/login va a buscar si el usuario se encuentra o no logeado, para ello necesita que el front envie el EMAIL o el USERNAME, con su contrasena. 
Ejemplo:
{   "email":"diego@gmail.com",
    "username":"dimi",
    "password":"123",
}


En caso de encontrar el usuario, el back devolvera el token: EJEMPLO: 
{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGEyNzcwMjIyNDQ5ZDZkZWFmYWUzMyIsImVtYWlsIjoiZGllZ28yMkBnbWFpbC5jb20iLCJub21icmUiOiJkaWVnbzIyIiwiZXhwIjoxNjYxNzc2OTAxLCJpYXQiOjE2NjE3NjI1MDF9.gx9WMIG20hC5I-PzMaaGpeHcsN7xVhtqjvrpjkUv_Lo"}

En caso de no encontrar el usuario el back retornara un:
status(401).json({error: "Usuario o correo incorrecto",})

-----------------------------------------------

2-REGISTRO - 
POST /register
/register requerira, del Front, UN OBJETO con al siguiente estructura:
{
	"nombre":"diego22",
	"apellido":"dimitroff22",
	"direccion":"barrio",
	"telefono":"129831",
	"rol":"adm",
	"email":"diego@gmail.com",	
	"activity":"Natacion",
	"username":"dimi"
	"password":"123",
}

a) En primer lugar se verificara que el username no se encuentre registrado. En caso de encontrarse ya registrado, el back respondera:
status(400).json({error: "Username ya registrado",});

b) En Segundo lugar se verificara que el correo no se encuentre registrado. En caso de encontrarse ya registrado, el back respondera:
status(400).json({error: "Correo ya registrado",});

c) SI EL REGISTRO SE REALIZA DE MANERA EXITOSA el back devolvera el un objeto con la contrasena encriptada (ejemplo):

{
    "error": null,
    "usuarioCreado": {
        "nombre": "diego22",
        "apellido": "dimitroff22",
        "direccion": "barrio",
        "telefono": "129831",
        "username": "dimi",
        "rol": "adm",
        "email": "diego@gmail.com",
        "password": "$2b$10$bfJRfwwliG6VFH.VJjl8ruWT8lfSpp81x8BnZTPGJ.xdth3I9/mmW",
        "activity": {
            "_id": "63075f22a961f56aab84873d",
            "nombre": "Natacion",
            "horarios": [
                {
                    "dia": "domingo",
                    "hora": "14.00",
                    "_id": "63075f22a961f56aab84873e"
                }
            ],
            "__v": 0
        },
        "fechaDePago": "lunes 29 08 2022 07:06:21",
        "_id": "630c8f9dc888c456c6446185",
        "created": "2022-08-29T10:06:21.973Z",
        "updated": "2022-08-29T10:06:21.973Z",
        "__v": 0
    }
}
c) Tener en cuenta que se debe enviar el nombre de la actividad en la que el alumno se sta inscribiendo, y este debe coincidir con los nombres que estan guardados en base de datos

-----------------------------------------------
3- BUSCAR TODOS LOS USUARIOS:
GET /users
/users
Este me devuelve todos los usuarios que se encuentran registrados con el siguiente formato:
[
    {
        "_id": "630c8f9dc888c456c6446185",
        "nombre": "diego22",
        "apellido": "dimitroff22",
        "direccion": "barrio",
        "telefono": "129831",
        "username": "dimi",
        "rol": "adm",
        "email": "diego@gmail.com",
        "password": "$2b$10$bfJRfwwliG6VFH.VJjl8ruWT8lfSpp81x8BnZTPGJ.xdth3I9/mmW",
        "activity": {
            "_id": "63075f22a961f56aab84873d",
            "nombre": "Natacion",
            "horarios": [
                {
                    "dia": "domingo",
                    "hora": "14.00",
                    "_id": "63075f22a961f56aab84873e"
                }
            ],
            "__v": 0
        },
        "fechaDePago": "lunes 29 08 2022 07:06:21",
        "created": "2022-08-29T10:06:21.973Z",
        "updated": "2022-08-29T10:06:21.973Z",
        "__v": 0
    },
        {
        "_id": "630c8f9dc888c456c6446185",
        "nombre": "Felipe",
        "apellido": "Ejemplo",
        "direccion": "barrio",
        "telefono": "129831",
        "username": "Felipe",
        "rol": "adm",
        "email": "felipe@gmail.com",
        "password": "$2b$10$bfJRfwwliG6VFH.VJjl8ruWT8lfSpp81x8BnZTPGJ.xdth3I9/mmW",
        "activity": {
            "_id": "63075f22a961f56aab84873d",
            "nombre": "Yoga",
            "horarios": [
                {
                    "dia": "domingo",
                    "hora": "13.00",
                    "_id": "63075f22a961f56aab84873e"
                }
            ],
            "__v": 0
        },
        "fechaDePago": "lunes 29 08 2022 07:06:21",
        "created": "2022-08-29T10:06:21.973Z",
        "updated": "2022-08-29T10:06:21.973Z",
        "__v": 0
    }
]
-----------------------------------------------
4- BUSCAR UN USUARIO EN PARTICULAR
POST /user
Este endpoint devuelve dos objetos que el Front puede utilizar: Mediante el correo (req.body.email) Devolvera un objeto como el siguiente:
{
    "usuarioBuscado": {
        "_id": "630c8f9dc888c456c6446185",
        "nombre": "diego22",
        "apellido": "dimitroff22",
        "direccion": "barrio",
        "telefono": "129831",
        "username": "dimi",
        "rol": "adm",
        "email": "diego@gmail.com",
        "password": "$2b$10$bfJRfwwliG6VFH.VJjl8ruWT8lfSpp81x8BnZTPGJ.xdth3I9/mmW",
        "activity": {
            "_id": "63075f22a961f56aab84873d",
            "nombre": "Natacion",
            "horarios": [
                {
                    "dia": "domingo",
                    "hora": "14.00",
                    "_id": "63075f22a961f56aab84873e"
                }
            ],
            "__v": 0
        },
        "fechaDePago": "lunes 29 08 2022 07:06:21",
        "created": "2022-08-29T10:06:21.973Z",
        "updated": "2022-08-29T10:06:21.973Z",
        "__v": 0
    },
    "fechaDePago": "lunes 29 08 2022 07:06:21"
}

Otra opcion, tambien, es la de solamente tomar uno de los dos valores que contiene el objeto anterior:
usuarioBuscado o fechaDePago, los cuales devuelve, por separado 

usuarioBuscado:
"usuarioBuscado": {
        "_id": "630c8f9dc888c456c6446185",
        "nombre": "diego22",
        "apellido": "dimitroff22",
        "direccion": "barrio",
        "telefono": "129831",
        "username": "dimi",
        "rol": "adm",
        "email": "diego@gmail.com",
        "password": "$2b$10$bfJRfwwliG6VFH.VJjl8ruWT8lfSpp81x8BnZTPGJ.xdth3I9/mmW",
        "activity": {
            "_id": "63075f22a961f56aab84873d",
            "nombre": "Natacion",
            "horarios": [
                {
                    "dia": "domingo",
                    "hora": "14.00",
                    "_id": "63075f22a961f56aab84873e"
                }
            ],
            "__v": 0
        },
        "fechaDePago": "lunes 29 08 2022 07:06:21",
        "created": "2022-08-29T10:06:21.973Z",
        "updated": "2022-08-29T10:06:21.973Z",
        "__v": 0
    }
    
fechaDePago:
"fechaDePago": "lunes 29 08 2022 07:06:21"

-----------------------------------------------
5- EDITAR EL PAGO DE UN USUARIO EN PARTICULAR
POST/paymentUpdate
Enviando el e-mail del usuario  (REQ.BODY.EMAIL) este me responde:
res.status(200).json(usuarioBuscado, pagoActualizado)
usuarioBuscado: Este me devuelve el usuario en particular en el siguiente formato:
		{"_id":"6309dd619c57f80eb38fac0c",
		"nombre":"diego",
		"apellido":"dimitroff",
		"direccion":"barrio",
		"telefono":"129831",
		"username":"dimi",
		"rol":"adm",
		"email":"diego@gmail.com",
		"password":"$2b$10$TBy2kzatbT.Hdvz44Ahr2uzqRcWH0k0802uOiq7pC7NAw7/ynf6HC",
		"fechaDePago:"sábado 27 08 2022 12:02:57",
		"created":"2022-08-27T09:01:21.911Z",
		"updated":"2022-08-27T09:01:21.911Z",
		"__v":0}
pagoActualizado: Este me actualiza la fecha del ultimo pago hecho por la persona buscada en el siguiente formato:
		"fechaDePago:"sábado 27 08 2022 12:02:57"