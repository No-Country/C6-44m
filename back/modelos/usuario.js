const mongoose = require('mongoose');
require('dotenv').config()

const MONGO_URI =  process.env.MONGO_URI
//llamando a mongoose

mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
})
.then(() => console.log('conectado a mongo'))
.catch(e => console.log(e))


//ESQUEMA MONGO
const UsuarioSchema = new mongoose.Schema({
  firstName: {type: String, required: true, max: 100},
  lastName: {type: String, required: true, max: 100},
  adress: {type: String, required: true, max: 100},
  age: {type: String, required: true, max: 100},
  phonenumber: {type: String, required: true, max: 100},
  email: {type: String, required: true, max: 100},
  username: {type: String, required: true, max: 100},
  password: {type: String, required: true, max: 100}
});

//Creando el modelo
const loginMong = mongoose.model('Usuario', UsuarioSchema)
module.exports = loginMong

