

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
  
const person = [
  {
    "name": "Karl",
    "age": 22
  },
  {
    "name": "Maria",
    "age": 35
  },
  {
    "name": "Erik",
    "age": 25
  },
  {
    "name": "Elisabeth",
    "age": 31
  },
  {
    "name": "Lars",
    "age": 40
  }
];

person.forEach(person => {
  if (person.age > 30) {
    console.log(`${person.name}`);
  }
});

module.exports = { uppg8 };
