const express = require("express");
const route = express.Router();
const passport = require("passport");

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

const controlers = require("../src/controler");
// ---------------------------------------------------------

// root/pagina principal
route.get("/", controlers.root);

// login
route.get("/login", controlers.getLogin);
route.post("/login",
  passport.authenticate("login", { failureRedirect: "/nologin" }),
  controlers.postLogin
);

route.get("/nologin", controlers.noLogin)

// registro
route.get("/signout", controlers.getSignout);
route.post("/signout",
  passport.authenticate("signup", { failureRedirect: "/nosignout" }),
  controlers.postSignout
);

route.get("/nosignout", controlers.noSignout)

// hago este endpoint para probar si funciona el logeo
// luego de hacer un /login de manera correcta se deberia mostrar "EL USUARIO ESTA LOGEADO ACTUALMENTE"
// en caso de no estarlo se lo deberia redireccionar a la pagina principal.
route.get("/userLogged", controlers.userLogged);


module.exports = route;
