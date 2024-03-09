const express = require("express");
const router = express.Router();
const Animal = require("../models/animal.js");

// Créer un nouvel animal
router.post("/", (req, res) => {
    // Vérifier la requête
    if (!req.body.name || !req.body.health || !req.body.happiness || !req.body.cleanliness) {
        res.status(400).send({ message: "Les champs ne peuvent pas être vides !" });
        return;
    }

    // Créer un nouvel animal
    const animal = new Animal({
        name: req.body.name,
        health: req.body.health,
        happiness: req.body.happiness,
        cleanliness: req.body.cleanliness
    });

    // Sauvegarder dans la base de données
    Animal.create(animal, (err, data) => {
        if (err)
            res.status(500).send({ message: err.message || "Une erreur s'est produite lors de la création de l'animal." });
        else res.send(data);
    });
});

module.exports = router;
