/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 1 - "Odwróć to"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która odwróci przekazany do niej string.
*
* Przykład:
* reverseMe('abc') // => 'cba'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/
/*
function reverseMe(input) {
  if(typeof input === 'string') {
    return input.split('').reverse().join('');
  }
  else {
    return "Error";
  }
  
}
*/
function reverseMe(input) {
  if(typeof input === 'string') {
    let reverseInput = '';
    for (let letter = input.length-1; letter >= 0; letter--){
      reverseInput += input[letter];
    };
    return reverseInput;
  }
  else {
    return "Error";
  }
  
}
/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(reverseMe('a'), 'a');
verify(reverseMe('abc'), 'cba');
verify(reverseMe('Przeprogramowani'), 'inawomargorpezrP');
verify(reverseMe('Brawo!'), '!owarB');
verify(reverseMe(1), '!owarB');