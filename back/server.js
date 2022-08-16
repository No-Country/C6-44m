const app = require('./rutas/login');
const PORT = process.env.PORT || 3050


//Puerto
app.listen(PORT, () => {
  console.log(`Funcionando en http://localhost:${PORT}`);
});