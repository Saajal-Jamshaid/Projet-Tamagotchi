// Simulons les données de l'animal virtuel
let animal = {
    name: "Fido",
    health: 100,
    happiness: 100,
    cleanliness: 100
};

// Fonction pour afficher les informations sur l'animal
function displayAnimalInfo() {
    const animalInfo = document.getElementById('animal-info');
    animalInfo.innerHTML = `
        <p>Nom: ${animal.name}</p>
        <p>Santé: ${animal.health}</p>
        <p>Bonheur: ${animal.happiness}</p>
        <p>Propreté: ${animal.cleanliness}</p>
    `;
}

// Fonction pour nourrir l'animal
function feedAnimal() {
    animal.health += 10;
    animal.happiness += 5;
    displayAnimalInfo();
}

// Fonction pour jouer avec l'animal
function playWithAnimal() {
    animal.happiness += 10;
    displayAnimalInfo();
}

// Fonction pour nettoyer l'animal
function cleanAnimal() {
    animal.cleanliness += 10;
    displayAnimalInfo();
}

// Attacher les fonctions aux boutons
document.getElementById('feed-btn').addEventListener('click', feedAnimal);
document.getElementById('play-btn').addEventListener('click', playWithAnimal);
document.getElementById('clean-btn').addEventListener('click', cleanAnimal);

// Afficher les informations initiales sur l'animal
displayAnimalInfo();
