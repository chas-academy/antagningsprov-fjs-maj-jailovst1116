
function uppg4() {
  
    // deklarera ett objekt med namnet person
    // objektet ska ha två properties, name och age
    // tilldela age 25
    // skriv ut med dotnotation åldern i konsolen
  const person ={};
    
  Object.defineProperties(person, {
    age: {
      value: 25,
    },
    name: {},
  });
console.log(person.age)
}


module.exports = { uppg4 };
