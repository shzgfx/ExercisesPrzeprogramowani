/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 6 - "W dwóch krokach"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która zwróci kolejną funkcję dodającą do przekazywanego
* parametru zarejestrowany wcześniej przedrostek.
*
*
* Przykład:
* const greeting = withPrefix('Witaj, ');
* greeting('Janek'); // => 'Witaj, Janek'
* greeting('Tomek'); // => 'Witaj, Tomek'
*
* const goodbye = withPrefix('Żegnaj, ');
* goodbye('Janek'); // => 'Żegnaj, Janek'
* goodbye('Tomek'); // => 'Żegnaj, Tomek'
*
* Utworzona funkcja to tzw. funkcja wyższego rzędu.
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/
/*
function withPrefix(prefix) {
  const pre = prefix;
  try {
    if(typeof pre === 'string') {
        return function(secondArg) {
          try {
            if(typeof secondArg === 'string') {
              return `${pre}${secondArg}`;
            } else {
              throw new Error('Your argument is not a string, please try again');
            }
          } catch(e) {
            console.log(e.message);
          }
        }
      } else {
      throw new Error('Your parameter is not a string, please try again');
    }
  } catch(e){
    console.log(e.message);
  }

}
*/
function withPrefix(prefix) {
  const pre = prefix;
    if(typeof pre === 'string') {
      return function(secondArg) {
        return typeof secondArg === 'string' ? `${pre}${secondArg}` : console.log('Your argument is not a string, please try again');
      }
    } 
    else {
      console.log('Your parameter is not a string, please try again');
    };
}
/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

const course = withPrefix('I ty Opanujesz JavaScript, ')


try {
  verify(course(1), 'I ty Opanujesz JavaScript, Marta');
  verify(course('Janek'), 'I ty Opanujesz JavaScript, Janek');
  verify(course('Marta'), 'I ty Opanujesz JavaScript, Marta');
} catch {
  console.log('Niestety :(')
}