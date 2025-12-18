const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// Estraggo solo i nomi usando map
const names = people.map(function(person) {
  return person.name;
});

// Stampo i nomi in console
names.forEach(function(name) {
  console.log(name);
});