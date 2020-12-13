/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 9 - "Fabryka"
*/

/*
* Cel zadania
*------------
* Zmodyfikuj funkcję factory w taki sposób, aby zmienna quote była dostępna jako właściwość.
*/
/*Sposób 1
function factory() {
  return Object.create(factory.prototype)
}
factory.prototype.quote = 'Cool!';
*/

//Sposób 2
/*
function factory() {
  return {
    quote: 'Cool!'
  }
}
*/
//Sposób 3
function factory() {
  this.obj = {quote: 'Cool!'};
  return this.obj
}


verify(factory().quote, 'Cool!');

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}