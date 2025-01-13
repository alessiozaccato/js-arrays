const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

//FIRST WAY
const longNames = teachers.filter(checkLength);
function checkLength(teacher) {
  return teacher.length >= 5;
}
console.log(longNames);

//SECOND WAY
const longNames1 = teachers.filter(teacher1 => teacher1.length >= 5); // using arrow function to make it more efficient
console.log(longNames1);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5, 1);// cause the array is reversed i need to go on the position 5
console.log(teachers);



// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
//FIRST WAY
const isFabioPresent = teachers.find(teacher => teacher.includes("Fabio")); // using arrow function to make it more efficient
console.log(isFabioPresent);



//SECOND WAY 


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(",");
console.log(teachersString);