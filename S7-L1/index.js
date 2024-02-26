//ESERCIZIO 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    (this.firstName = _firstName), (this.lastName = _lastName), (this.age = _age), (this._location = _location);
  }
  comparison(x, y) {
    if (x < y) {
      console.log(`${x} è più giovane di ${y}`);
    } else console.log(`${x} è più vecchoi di ${y}`);
  }
}

const object1 = new User("Jojo", "Joestar", "27", "Tornino");
console.log(object1);

const object2 = new User("Jampierre", "Polnareff", "26", "Parigi");

console.log(comparison(object1.age, object2.age));

const obj1prop = object1.age;
console.log(obj1prop);
const obj2prop = object2.age;
console.log(obj2prop);

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
