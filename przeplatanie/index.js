/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 3 - "Przeplatanie"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
* - używając kolejnych cyfr parametrów połączy je w jeden string.
*
* Przykład:
* zipIt(111, 222) // => '121212'
* zipIt(123, 456) // => '142536'
* zipIt(12, 5555) // => '152555'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
* spełniają tego warunku, funkcja powinna rzucić wyjątek.
*/
/*Sposób 1
function zipIt(first, second) {
  try {
    if(typeof first !== 'number' || typeof second !== 'number') {
      throw new Error('One of arguments is not a number')
    } else {
      const firstArr = first.toString().split('');
      const secondArr = second.toString().split('');
      const loopLength = firstArr.length > secondArr.length ? firstArr.length : secondArr.length;
      const finalArr = [];
      for (let i = 0; i < loopLength; i++) {
        finalArr.push(firstArr[i]);
        finalArr.push(secondArr[i]);
      }
      return finalArr.join('');
    }
    
  } catch(e) {
      return e.message;
    }
  
}
*/
/* Sposób 2
function zipIt(first, second) {
  try {
    if(typeof first !== 'number' || typeof second !== 'number') {
      throw new Error('One of arguments is not a number')
    } else {
      const firstArr = first.toString().split('');
      const secondArr = second.toString().split('');
      const loopLength = firstArr.length > secondArr.length ? firstArr.length : secondArr.length;
      let finalString = ``;
      for (let i = 0; i < loopLength; i++) {
        if(firstArr[i] && secondArr[i]) {
          finalString += `${firstArr[i]}${secondArr[i]}`
        }
        else if (firstArr[i] && !secondArr[i]) {
          finalString += `${firstArr[i]}`;
        }
        else {
          finalString += `${secondArr[i]}`;
        }
      }
      return finalString;
    }
    
  } catch(e) {
      return e.message;
    }
  
}
*/

function zipIt(first, second) {
  try {
    if(typeof first !== 'number' || typeof second !== 'number') {
      throw new Error('One of arguments is not a number')
    } else {
      const arrayNumbers = [first.toString().split(''), second.toString().split('')]
      
      const stringNumber = arrayNumbers.reduce( ((accumulator, element)=> {
        element.forEach((e, i) => {
          accumulator[i] = `${(accumulator[i] || '')}${e}`;
        })
        return accumulator;
      }), [])

      return stringNumber.join('')
    }
  } 
  catch(e) {
      return e.message;
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

verify(zipIt(111, 222), '121212');
verify(zipIt(123, 456), '142536');
verify(zipIt(12, 5555), '152555');