const sql = require("./db.js");

// Modèle Animal
const Animal = function(animal) {
    this.name = animal.name;
    this.health = animal.health;
    this.happiness = animal.happiness;
    this.cleanliness = animal.cleanliness;
};

Animal.create = (newAnimal, result) => {
    sql.query("INSERT INTO animals SET ?", newAnimal, (err, res) => {
        if (err) {
            console.log("Erreur lors de la création de l'animal : ", err);
            result(err, null);
            return;
        }

        console.log("Nouvel animal créé : ", { id: res.insertId, ...newAnimal });
        result(null, { id: res.insertId, ...newAnimal });
    });
};

// Autres méthodes de modèle comme findById, findAll, etc.

module.exports = Animal;
