const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola mundo!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
