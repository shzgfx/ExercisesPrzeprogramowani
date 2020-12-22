/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 11 - Thing inside the box
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, sprawdzającą czy pudełko jest puste.
*
*
*/
/* Sposób 1
function thing(box) {
  return (box === `*****
              * o *
              *   *
              *****` || box === `*****
              *   *
              * o *
              *****`) ? true : false;
}
*/
/* Sposób 2
function thing(box) {
  return box.includes('* o *');
}
*/
//Sposób 3
function thing(box) {
  const splittedBox = box.split(' ').join('');
  return splittedBox.includes('*o*');
}



/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(thing(`*****
            o *   * o
              *   *
              *****`), false);

verify(thing(`*****
              * o *
              *   *
              *****`), true);

 verify(thing(`*****
               *   *
               *   *
               *****`), false);

verify(thing(`********************
              *                  * o
              *                  *
              *                  *
              *                  *
              *                  *
              *                  *
              ********************`), true);