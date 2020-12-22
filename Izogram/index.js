/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 13 - "Izogram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję sprawdzającą czy podane słowo jest izogramem, czyli słowem w którym każda litera występuje tylko jeden raz.
*
*
* Przykład:
* isogram('Izogram'); // => true
* isogram('Przeprogramowani'); // => false
* 
*/
/* Sposób 1
function isogram(word) {
  
  const letters = word.toLowerCase().split('').reduce(((acc, element, index) => {
    if(!acc.includes(element)) {
      acc.push(element);
    }
    return acc;
  }),[])
  
  return letters.length === word.length
}
*/
/* Sposób 2
function isogram(word) {
  const uniqueLetters = [];
  const letters = word.toLowerCase().split('');
  letters.forEach(element => {
    if(!uniqueLetters.includes(element)) {
      uniqueLetters.push(element);
    }
  });
  return uniqueLetters.length === letters.length
}
*/

function isogram(word) {
  const letters = word.toLowerCase().split('');
  const uniqueLetters = new Set(letters);
  return uniqueLetters.size === letters.length
}


/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isogram('izogram'), true);
verify(isogram('Przeprogramowani'), false);
verify(isogram('SprawdzAm'), false);