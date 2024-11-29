const express = require('express');
const app = express();
const Catway = require('./models/catway'); 
require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connecté'))
    .catch(err => console.log('Erreur de connexion MongoDB:', err));

mongoose.set('debug', true);

app.get('/', (req, res) => {
    res.render('index'); 
});


app.get('/catways', async (req, res) => {
    try {
        const catways = await Catway.find();
        console.log("Catways récupérés:", catways); 
        res.render('catways', { catways });
    } catch (error) {
        console.error("Erreur lors de la récupération des catways:", error);
        res.status(500).send("Erreur serveur");
    }
    
});

app.listen(process.env.PORT, () => {
    console.log(`Serveur démarré sur le port ${process.env.PORT}`);
});