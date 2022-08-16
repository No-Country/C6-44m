function root(req, res) {
  res.send("Bienvenido a la aplicacion");
}

function getLogin(req, res) {
  res.send("INPUT DEL LOGIN");
}
function postLogin(req, res) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    let user = req.user;
    res.send("USUARIO LOGEADO");
  }
}

function noLogin(req, res)  {
  res.send("Usuario no es correcto");
};

// PARA REGISTRARSE NECESITAMOS RECIBIR UN OBJETO COMO EL SIGUIENTE
// {
//   firstName: 'Martina Carolina',
//   lastName: 'Perez',
//   adress: 'barrio 200 vivi.',
//   age: '27',
//   phonenumber: '+543624779235',
//   email: 'valeria123@gmail.com',
//   username: 'Valeria88',
//   password: 'casa123',
// }

function getSignout(req, res) {
  res.send("INPUT DEL REGISTRO");
}

// SI EL REGISTRO SE REALIZA DE MANERA EXITOSA, LA INFO DEL USUARIO QUEDARIA GUARDADA EN UN OBJETO
// CON LA CONTRASENA ENCRIPTADA Y EL MISMO MONGO AGREGA UN ID. COMO EL SIGUIENTE:
// {
  // _id: new ObjectId("62eb13a3c07dc9bc13b12322"),
  // firstName: 'Martina Carolina',
  // lastName: 'Perez',
  // adress: 'barrio 200 vivi.',
  // age: '27',
  // phonenumber: '+543624779235',
  // email: 'valeria123@gmail.com',
  // username: 'Valeria88',
  // password: '$2b$10$Q6mGK/Vckr/DGD6AzDdlFeye0igBBF0MZrMdBPECCCuTTQzmu/j1q',
//   __v: 0
// }

function postSignout(req, res) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    res.send("REGISTRO CREADO DE MANERA EXITOSA");
  }
}

function noSignout(req, res)  {
  console.log(req.body);
  res.send("Usuario no se pudo Crear correctamente");
};

function userLogged(req, res) {
  if (req.isAuthenticated()) {
    res.send("EL USUARIO ESTA LOGEADO ACTUALMENTE")
  } else {
    res.redirect("/");
  }
}
module.exports = {
  root,
  getLogin,
  postLogin,
  noLogin,
  getSignout,
  postSignout,
  noSignout,
  userLogged,
};
