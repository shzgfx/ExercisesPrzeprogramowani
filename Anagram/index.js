/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 17 - "Anagramy"
*/

/*
* Cel zadania
*------------
* Otrzymując jako parametry słowo i tablicę jego możliwych anagramów, zwróć tablicę z właściwymi anagramami.
*
*  Anagram to wyraz powstały przez przestawienie liter innego wyrazu, wykorzystujący wszystkie litery materiału wyjściowego.
*
* Przykład:
* getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]);  => ["orperzpinawomarg",  "graprzewanipromo"]
* 
* 
*/
//Sposób 1

function getAnagrams(word, possibleAnagrams) {
  const letters = word.toLowerCase().split('');
  return possibleAnagrams.filter(element => letters.every(letter => element.includes(letter)));
};

/* Sposób 2
function getAnagrams(word, possibleAnagrams) {
  const letters = word.toLowerCase().split('');  
  const anagrams = possibleAnagrams.filter(element => element.length === word.length).reduce(((acc, element) => {
    if(element.split('').every(letter => letters.includes(letter))) {
      acc.push(element);
    }
    return acc;
    }),[]);
  return anagrams;
};
*/

/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]), "orperzpinawomarg, graprzewanipromo");
verify(getAnagrams("siema", ["hej", "witam", "dzień dobry", "emasi"]), "emasi");