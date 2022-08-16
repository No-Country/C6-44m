const express = require("express");
// const login = express.Router();
const app = express();
const session = require("express-session");
const passport = require("passport");
const UserModel = require("../modelos/usuario");
const LocalStrategy = require("passport-local").Strategy;
const route = require("./routes");
const validatePass = require("../utils/passValidator");
const createHash = require("../utils/hasGenerator");

app.use(
  session({
    secret: "nocountry",
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 300000,
    },
    rolling: true,
    resave: true,
    saveUninitialized: true,
  })
);

// INICIALIZACION DE PASSPORT:
app.use(passport.initialize());
app.use(passport.session());

// CONFIGURACION DEL COMPORTAMIENTO DE LA ESTRATEGIA:
// LOGIN   ------------------
passport.use(
  "login",
  new LocalStrategy((username, password, done) => {
    UserModel.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        console.log("no se encontro usuario");
        return done(null, false);
      }
      if (!validatePass(user, password)) {
        console.log("pasword invalido");
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

// REGISTRO------------------
passport.use(
  "signup",
  new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      UserModel.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          console.log("el usuario ya existe");
          return done(null, false);
        }

        const NewUser = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          adress: req.body.adress,
          age: req.body.age,
          phonenumber: req.body.phonenumber,
          username: username,
          password: createHash(password),
        };
        console.log(`Se ha creado el siguiente usuario:
      ${NewUser}`);

        UserModel.create(NewUser, (err, userWithId) => {
          if (err) {
            console.log(`Error en el registro: ${err}`);
            return done(err);
          }
          console.log(userWithId);
          console.log("registro satisfactorio");
          return done(null, userWithId);
        });
      });
    }
  )
);

// SERIALIZACION Y DESERIALIZACION:
passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser((id, done) => {
  UserModel.findById(id, done);
});

app.use(route)


module.exports = app;
