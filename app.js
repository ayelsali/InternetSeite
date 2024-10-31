const express = require('express');
const app = express();
const port = 8000;

//statische Dateien bereitstellen
app.use(express.static('public'));

// eine einfache Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Server starten
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
});