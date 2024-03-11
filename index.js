const express = require('express');

const app = express();

app.get('/suma', (req, res) => {
  // Obtener los parámetros 'num1' y 'num2' de la URL
  const { num1, num2 } = req.query;

  // Convertir los parámetros a números
  const numero1 = parseInt(num1);
  const numero2 = parseInt(num2);

  // Si no se recibieron dos números, enviar un error
  if (isNaN(numero1) || isNaN(numero2)) {
    res.status(400).send({ error: "Parámetros no válidos." });
    return;
  }

  // Calcular la suma
  const suma = numero1 + numero2;

  // Enviar la respuesta con la suma
  res.send({ resultado: suma });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

