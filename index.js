const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola mundo a todos ahora FUNCIONA!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
