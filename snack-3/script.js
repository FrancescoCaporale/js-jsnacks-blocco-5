const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// Creo un nuovo array con tutti i numeri incrementati di 1
const incrementedNumbers = numbers.map(function(number) {
  return number + 1;
});

console.log(incrementedNumbers) 