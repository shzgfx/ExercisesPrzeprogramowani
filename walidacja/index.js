/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 2 - "Walidacja"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy przekazane hasło spełnia określone warunki:
*
* a) Ma długość od 3 do 10 znaków
* b) Zawiera jeden ze znaków specjalnych - !, @ lub #
* c) Zawiera cyfrę
*
* Przykład:
* validatePassword('test') // => false
* validatePassword('test11!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/

function validatePassword(password) {
  try {
    if(typeof password !== 'string') {
      throw new Error("asd");
    } else if (password.length >= 3 && password.length <= 10 && password.match(/\d\W/g)) {
        return true;
    } else {
        return false;
    }
  } catch(e) {
    console.log('password is not a string');
  }

/*if(typeof password === 'string' && password.length >= 3 && password.length <= 10 && password.match(/\d\W/g)) {
    return true;
  } else {
    return false;
  }
*/
}
/* Sposób 2
function validatePassword(password) {
  try {
    if(typeof password !== 'string') {
      throw new Error("asd");
    } else if (password.length >= 3 && password.length <= 10) {
      const marks = ['0','1','2','3','4','5','6','7','8','9', '%', '@', '#'];
      const includes = []
      for (const mark of marks) {
        if( password.includes(mark)) {
          includes.push(mark)
        }
      }
      console.log(includes)
      if (marks.length >= 2 && (includes.includes('%') || includes.includes('@') || includes.includes('#'))) {
        return true
      } else { 
        return false
      }
    } else {
      return false
    }
      
    
  } catch(e) {
    console.log('password is not a string');
  }
*/
/*if(typeof password === 'string' && password.length >= 3 && password.length <= 10 && password.match(/\d\W/g)) {
    return true;
  } else {
    return false;
  }

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
validatePassword(1234)
verify(validatePassword('12'), false);
verify(validatePassword('lol12'), false);
verify(validatePassword('ToDziala1#'), true);