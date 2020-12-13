/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 5 - "Pangram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy podany parametr to tzw. pangram.
*
* Pangram to możliwe do zrozumienia zdanie wykorzystujące wszystkie litery danego alfabetu.
*
*
* Przykład:
*
* isPangram('test') // => false
* isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Zweryfikuj, czy konkretna litera występuje w podanym zdaniu tylko jeden raz.
*/
//sposób 1
function isPangram(sentence) {
  const checkSentence = sentence.toLowerCase().match(/([a-ż])(?!.*\1)/g || []);
  if (checkSentence.length === 32) {
    return true
  }
  else {
    return false
  }
}

// Sposób 2 
/*
function isPangram(sentence) {
  const checkSentence = sentence.toLowerCase().split(' ').join('').split('').filter(e => {
    return alphabet.includes(e);
  });
  const setLetters = new Set(checkSentence)
  if (setLetters.size === 32) {
    return true;
  } else {
    return false;
  }
} */

/* Sposób 3
function isPangram(sentence) {
  const alphabet = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','r','s','ś','t','u','w','y','z','ź','ż']
  let newArray = alphabet.filter((e) => {
    return (sentence.toLowerCase().includes(e))
    });
  newArray = newArray.filter((e, i, arr) => (e !== arr[i+1]))
  return newArray.length === 32 ? true : false;
}
*/
/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isPangram('test'), false);
verify(isPangram('Dość gróźźźb fuzją,1 klnę, pych i małżeństw!'), true);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!'), true);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małże!'), false);