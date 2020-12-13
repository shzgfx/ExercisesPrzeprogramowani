/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 7 - "Emoji"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję "useEmoji", która zastąpi wszystkie słowa danego parametru zgodnie 
* z mapowaniem z obiektu "emojiMappings";
*
* Przykład:
* useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!') // => 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!'
* useEmoji('Jadę po nowy samochód :D') // => 'Jadę po nowy 🏎 :D'
*/

const emojiMappings = {
  'stop': '🚫',
  'gwiazda': '⭐️',
  'samochód': '🏎',
  'buduję': '🧱',
  'budzik': '⏰'
};
/* Sposób 1
function useEmoji(input) {
  const keys = Object.keys(emojiMappings);
  let emojiString = input;
  keys.forEach(e => emojiString = emojiString.includes(e) ? emojiString = emojiString.replace(new RegExp(e, 'g'), emojiMappings[e]) : emojiString)
  return emojiString
}
*/
function useEmoji(input) {
  const keys = Object.keys(emojiMappings);
  let emojiString = input.split(/([^A-Ża-ż]|[,?!.])/g).filter(e => (e !== ''));
  emojiString = emojiString.map(e => keys.includes(e) ? emojiMappings[e] : e);
  return emojiString.join('');
}
/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!'), 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!');
verify(useEmoji('Jadę po nowy samochód :D'), 'Jadę po nowy 🏎 :D');
verify(useEmoji('Właśnie buduję swoje skille w JS'), 'Właśnie 🧱 swoje skille w JS');
