//ESERCIZIO 1
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  confrontaEta(altraPersona) {
    if (this.age > altraPersona.age) {
      return `${this.firstName} è più vecchio di ${altraPersona.firstName}`;
    } else if (this.age < altraPersona.age) {
      return `${this.firstName} è più giovane di ${altraPersona.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${altraPersona.firstName}`;
    }
  }
}

// Creazione di due istanze della classe User
const utente1 = new User("Mario", "Rossi", 30, "Roma");
const utente2 = new User("Luca", "Bianchi", 25, "Milano");

// Verifica del confronto tra le età delle due persone
console.log(utente1.confrontaEta(utente2));

//ESERCIZIO 2

// Definizione della classe Pet
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  // Metodo per verificare se due animali hanno lo stesso padrone
  sameOwner(anotherPet) {
    return this.ownerName === anotherPet.ownerName;
  }
}

// Selezione del form e della lista
const form = document.getElementById("petForm");
const petList = document.getElementById("petList");

// Aggiunta di un gestore eventi per il submit del form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Previeni il comportamento predefinito del submit

  // Recupero dei valori inseriti nel form
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  // Creazione di un'istanza della classe Pet con i valori del form
  const newPet = new Pet(petName, ownerName, species, breed);

  // Aggiunta dell'animale alla lista
  addPetToList(newPet);

  // Reset del form
  form.reset();
});

// Funzione per aggiungere un animale alla lista
function addPetToList(pet) {
  const listItem = document.createElement("li");
  listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
  petList.appendChild(listItem);
}
