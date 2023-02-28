const express = require('express');
const app = express();
const port = 3000;

// Configuration des fichiers statiques
app.use(express.static('public'));

// Page d'accueil
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

// Nos services
app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/views/services.html');
});

// Contactez-nous
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
