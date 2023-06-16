/* ESERVICIZIO 1

. funzione che riceve due set come parametri
. stampare il risultato

*/

console.log("\n\n");
console.log("///////////////// ESERCIZIO 1");

{
  const set1 = new Set(["ciao", "cosa", "mangi", "oggi", "bro"]);
  const set2 = new Set(["ciao", "oggi", "mangio", "la", "mela"]);

  function difference(set1, set2) {
    let charPairs = 0;
    let charEndsA = 0;

    set1.forEach((el) => {
      if (el.length % 2 == 0) charPairs++;
    });

    set2.forEach((el) => {
      if (el.charAt(el.length - 1) == "a") charEndsA++;
    });

    console.log(charPairs - charEndsA);
  }

  difference(set1, set2);
}

/* ESERVICIZIO 2

. funzione prende in inputo array con 3 oggetti
. restituisce un nuovo array con le 3 persone per ordine dal più giovane al più vecchio

*/

console.log("\n\n");
console.log("///////////////// ESERCIZIO 2");

{
  let array = [
    {
      nome: "Elias",
      cognome: "Ripari",
      eta: "33",
    },
    {
      nome: "Marysabel",
      cognome: "Patino",
      eta: "26",
    },
    {
      nome: "Marcos",
      cognome: "Ripari",
      eta: "64",
    },
  ];

  function orderPeople(array) {
    arraySorted = [];
    arraySorted = array.sort((a, b) => a.eta - b.eta);

    arraySorted.forEach((el) => {
      console.log(`Nome: ${el.nome}, Cognome: ${el.cognome}, Eta: ${el.eta}`);
    });
  }

  orderPeople(array);
}

/* ESERVICIZIO 3

. creare array di 6 stringe 
. creare una mappa con chiavi ogni elemento dell'array e come valore la lunghezza della chiave stessa
. stampa ogni coppia di chiave-valori seguendo la frase la parola … contiene … caratteri

*/

console.log("\n\n");
console.log("///////////////// ESERCIZIO 3");

{
  const array = ["ciao", "come", "stai", "oggi", "bro", "taaaac"];
  let mapArray = new Map([]);

  array.forEach((el) => {
    mapArray.set(`${el}`, el.length);
  });

  mapArray.forEach((value, key) => {
    console.log("la parola " + key + " contiene " + value + " caratteri");
  });
}

/* ESERVICIZIO 3

. creare array di 6 stringe 
. creare una mappa con chiavi ogni elemento dell'array e come valore la lunghezza della chiave stessa
. stampa ogni coppia di chiave-valori seguendo la frase la parola … contiene … caratteri

*/

console.log("\n\n");
console.log("///////////////// ESERCIZIO 4");

{
  const json = [
    `{
"date1": "1990-10-10",
"date2": "1980-10-10",
"date3": "1970-10-10",
"date4": "1960-10-10"
}`,
  ];

  const arrayJson = JSON.parse(json);
  console.log(arrayJson);
  const arrayDates = [];

  for (el in arrayJson) {
    if (arrayJson.hasOwnProperty(el)) {
      arrayDates.push(new Date(arrayJson[el]).getTime());
    }
  }

  let biggest = arrayDates[0];
  let smallest = arrayDates[0];

  arrayDates.forEach((el) => {
    if (biggest < el) biggest = el;
  });

  arrayDates.forEach((el) => {
    if (smallest > el) smallest = el;
  });

  console.log(new Date(biggest));
  console.log(new Date(smallest));
}

/* ESERVICIZIO 5

. creare una stringa
. stampare solo i caratteri che compaiono una volta

*/

console.log("\n\n");
console.log("///////////////// ESERCIZIO 5");

{
  const string = "abbazia";
  function printSingleCahr(string) {
    let arrayChars = [];
    string.split("").forEach((el) => {
      arrayChars.push(el);
    });
    //console.log(arrayChars);
    let mapChars = new Map();
    arrayChars.forEach((el) => {
      mapChars.has(el)
        ? mapChars.set(el, mapChars.get(el) + 1)
        : mapChars.set(el, 1);
    });
    //console.log(mapChars);
    mapChars.forEach((value, key) => {
      if (value <= 1) console.log(key);
    });
  }

  printSingleCahr(string);
}

console.log("\n\n");
console.log("\n\n");

console.log("///////////////// MEDIUM /////////////////");

console.log("\n\n");
console.log("///////////////// ESERCIZIO 1");

/* ESERVICIZIO 1

. creare una array di 6 numeri 
. stampare la diffefenza tra il numero maggiori di 10 e il numero di mumeri inferiori a 1
. variabile per som num > 10
. variabile per som num > -1 

*/
{
  let array = [1, 20, 3, -3, 4, -6];
  let array2 = [10, -10, 20, -20];

  function calcDiff(array) {
    let greaterZero = 0;
    let lesZero = 0;

    array.forEach((el) => {
      el > 0 ? (greaterZero += el) : (lesZero += el);
    });

    greaterZero + lesZero == 0
      ? console.log(array.reverse())
      : console.log(array[0], array[array.length - 1]);
  }

  calcDiff(array);
  calcDiff(array2);
}

console.log("\n\n");
console.log("///////////////// ESERCIZIO 2");

/* ESERVICIZIO 2

. funzione con due set con 5 numeri ognuno e restituisce un oggetto
. oggetto con le seguenti proprieta;
  winner => avrà valore 1 o 2 per determinare quale dei due set ha più valori, se hanno gli stessi valori la parità viene deterimanta con lo 0
  morePositive => avrà valore 1 se li primo ha più numeri positi

*/
{
  const set1 = new Set([3, 4, 5, 4, 5, 8]);
  const set2 = new Set([1, 3, 9, 4, 1]);
  function fn(set1, set2) {
    let obj = {};
    let arrSet1 = Array.from(set1);
    let arrSet2 = Array.from(set2);
    let sumArrSet1 = arrSet1.reduce(function (total, num) {
      return total + num;
    }, 0);
    let sumArrSet2 = arrSet2.reduce(function (total, num) {
      return total + num;
    }, 0);

    if (arrSet1.length > arrSet2.length) {
      obj.winner = 1;
    } else if (arrSet1.length < arrSet2.length) {
      obj.winner = 2;
    } else {
      obj.winner = 0;
    }

    obj.morePositive =
      sumArrSet1 > sumArrSet2 ? 1 : sumArrSet1 < sumArrSet2 ? 2 : 0;

    return obj;
  }

  console.log(fn(set1, set2));
}

console.log("\n\n");
console.log("///////////////// ESERCIZIO 3");

/* ESERVICIZIO 3


*/
{
  let obj1 = {
    x: 4,
    y: 8,
  };

  let obj2 = {
    x: 4,
    y: 5,
  };

  function calcolaArea(x, y) {
    return x * y;
  }

  function calcolaPerimetro(x, y) {
    return (x + y) * 2;
  }

  function calc(ob1, ob2, str) {
    if (str === "area") {
      return calcolaArea(ob1.x, ob1.y) - calcolaArea(ob2.x, ob2.y);
    }

    if (str === "perimetro") {
      return calcolaPerimetro(ob1.x, ob1.y) - calcolaPerimetro(ob2.x, ob2.y);
    }
  }

  console.log(calc(obj1, obj2, "area"));
  console.log(calc(obj1, obj2, "perimetro"));
}

console.log("\n\n");
console.log("///////////////// ESERCIZIO 4");

/* ESERVICIZIO 4


*/

{
  function upperCase(str) {
    return str.toUpperCase();
  }

  function posOdd(str) {
    let strSplitted = str.split("");
    let result = [];
    strSplitted.forEach((el, i) => {
      if (i % 2 != 0) result.push(el);
    });
    return result.join("");
  }

  function invert(str) {
    let strSplitted = str.split("");
    return strSplitted.reverse().join("");
  }

  function opeStringa(string, fn) {
    if (fn == upperCase) return upperCase(string);
    string;
    if (fn == posOdd) return posOdd(string);
    if (fn == invert) return invert(string);
  }

  console.log(opeStringa("javascript", upperCase));
  console.log(opeStringa("javascript", posOdd));
  console.log(opeStringa("javascript", invert));
}

console.log("\n\n");
console.log("///////////////// ESERCIZIO 5");

/* ESERVICIZIO 5


*/

{
  let json = `[
    {
		"autore": "mario rossi",
		"titolo": "jerry potter",
		"data": "1910-10-10"
	},
	{
		"autore": "luigi verdi",
		"titolo": "la storia finita",
		"data": "1960-10-10"
	},
	{
		"autore": "peach rosi",
		"titolo": "metti la cera",
		"data": "1970-10-10"
	},
	{
		"autore": "mario rossi",
		"titolo": "togli la cerca",
		"data": "1980-10-10"
	},
	{
		"autore": "luigi verdi",
		"titolo": "mma kid",
		"data": "1950-10-10"
	},
	{
		"autore": "lucia bianchi",
		"titolo": "javascript non è java",
		"data": "1999-10-10"
	},
	{
		"autore": "anna neri",
		"titolo": "java non è javascript",
		"data": "1930-10-10"
	}
  ]`;

  const arrayJson = JSON.parse(json);

  // function filtra(array) {  NON VA
  //   let newArr = [];
  //   array.forEach((el) => {
  //     console.log(el);
  //     if (!newArr.includes(el.autore)) {
  //       newArr.push(el);
  //     }
  //   });
  //   console.log(newArr);
  // }

  function filtra(array) {
    let autori = new Set();
    let libri = [];

    for (let el of array) {
      if (!autori.has(el.autore)) {
        autori.add(el.autore);
        libri.push(el);
      }
    }

    let vecchio = libri[0];
    let nuovo = libri[0];

    libri.forEach((el, i) => {
      if (new Date(el.data) < new Date(vecchio.data)) vecchio = libri[i];
      else if (new Date(el.data) > new Date(nuovo.data)) nuovo = libri[i];
    });

    // libri.forEach((el, i) => {
    //   if (new Date(el.data) > new Date(nuovo.data)) nuovo = libri[i];
    // });

    console.log(libri);

    console.log(`
    Il libro più recente è: ${nuovo.titolo} scritto da ${
      nuovo.autore
    } nel ${nuovo.data.slice(0, -6)} 
    Il libro più vecchio è: ${vecchio.titolo} scritto da ${
      vecchio.autore
    } nel ${vecchio.data.slice(0, -6)}
    `);
  }

  filtra(arrayJson);
  console.log();
}
