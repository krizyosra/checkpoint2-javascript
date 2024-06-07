/*****************Fonctions de manipulation de chaînes*************************/
function reverse(chaine) {
  let rev = chaine.split("").reverse().join("");
  return rev;
}

function longueur(chaine) {
  let c = chaine;
  console.log(c.length);
  return c;
}

function title(str) {
  let words = str.toLowerCase().split(" ");
  let array = [];

  words.forEach((word) => {
    let firstLetter = word.charAt(0).toUpperCase();
    let replacement = word.replace(word.charAt(0), firstLetter);
    array.push(replacement);
  });
  console.log(array.join(" "));
}

title("salut les gens");

/*****************Fonctions du tableau :*************************/

function minMax(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  return [min, max];
}

function somme(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

/*****************Fonctions mathématiques*************************/

function fact(nbr) {
  var i,
    nbr,
    f = 1;

  for (i = 1; i <= nbr; i++) {
    f *= i;
  }
  return f;
}
