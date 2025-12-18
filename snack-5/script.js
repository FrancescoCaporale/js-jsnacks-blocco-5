const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// Creo un nuovo array con solo i numeri pari
const evenNumbers = nums.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers)