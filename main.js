//***********🌟 Exercise 1 : Series*********** */

// Instructions


// Store your favorite food into a variable.
let eat = "Foufou";
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
let  meal = "breakfast";
// Console.log I eat <favorite food> at every <favorite meal>
console.log("I eat "+eat+" at every "+meal);


//***********🌟 Exercise 2 : Series*********** */
// Instructions

// Part I------------


// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
const myWatchedSeriesLength= myWatchedSeries.length; 
// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
myWatchedSeriesSentence = myWatchedSeries.join();

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

console.log("I watched "+myWatchedSeriesLength+" series :"+myWatchedSeries[0]+", "+myWatchedSeries[1]+", and "+myWatchedSeries[2]);

// Part II-------------


const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];// le tableau
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries.splice(2,2,"friends");//remplace the... par friends
// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Black Adam");// ajoute black adam a la fin du tableau
// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("Peter pan");// ajoute peter pan au debut du tableau
// Delete the series “black mirror”.
myWatchedSeries.splice(1,1);//suprime le premier element du tableau
console.log(myWatchedSeries);
// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1].substr(2,1));// affichce la troisieme lettre de la serie money hist
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);// affiche le contenu du tableau



//***********🌟 Exercise 3 : The Temperature Converter*********** */
// Instructions
// Store a celsius temperature into a variable.
let celsius = 35;
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
let fahrenheit = ( celsius / 5) * 9 + 32;
console.log(Cel+" C is"+fa+" F"); // affcihe le resultat



//***********🌟 Exercise 4 : Guess The Answers #1*********** */

// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

let c;
let a = 34;
let b = 21;





// 1-What will be the outcome of a + b in the first expression ?

console.log(a+b) //first expression
// Prediction: la console retournera 55, qui est la somme de la variable a et b
// Actual:55

// 2-What will be the outcome of a + b in the second expression ?
// 3What is the value of c?
a = 2;

console.log(a+b) //second expression
// Prediction: la console retournera 23, la nouvelle valeur attribuée 
// Actual: 23

// 4-Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
// Prediction: la console retournera 75, ce resultat est la somme de 3 et 4 auqelle s'ajou
// Actual: 23


//***********🌟 Exercise 5 : Guess The Answers #2*********** */

// For each expression, predict what you think the output will be in a comment 
// (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


typeof(15)
// Prediction: number, typeof retourne le type de l'element mis en parametre
// Actual:  number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: number
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: True
// Actual:True

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN
// Actual: NaN

"1" + "3"
// Prediction: 13, il s'agit d'une concatenation de deux variables de type string
// Actual:13

"1" - "3"
// Prediction:NaN, impossible de faire des soustractions entre chaine de caracteres
// Actual:NaN

"johnny" + 5
// Prediction:Johnny5, une concatenation entre une chaine de caractere et un nombre
// Actual:Johnny5

"johnny" - 5
// Prediction:NaN, impossible de faire des soustractions entre une chaine de caractere et un nombre
// Actual:

99 * "hello"
// Prediction:NaN,  impossible de faire des operations de multiplications entre une chaine de caractere et un nombre
// Actual:

1 != 1
// Prediction:True
// Actual:True

1 == "1"
// Prediction:false
// Actual:false

1 === "1"
// Prediction:false, le type de 1  nombre est different du type de "1" qui est de type String
// Actual: false



//***********🌟 Exercise 6 : Guess The Answers #3*********** */
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// What is the output of each of the expressions below?

5 + "34"
// Prediction:543,
// Actual:534

5 - "4"
// Prediction:
// Actual:

10 % 5
// Prediction:0, le reste de la division 
// Actual:0

5 % 10
// Prediction:
// Actual: 2

"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript

" " + " "
// Prediction:"  ", une somme de deux espaces
// Actual:"  "

" " + 0
// Prediction:" 0", un 0 precederd'un espace
// Actual: 0

true + true
// Prediction:2, fait la somme de 1 et 1
// Actual:

true + false
// Prediction:1, qui est la somme de 1+0
// Actual:

false + true
// Prediction:1, la somme de 0+1
// Actual:

false - true
// Prediction:-1, qui est la soustraction de 0 et 1
// Actual:1

!true
// Prediction:false, le contraire de true
// Actual:false

3 - 4
// Prediction:-1,
// Actual:-1

"Bob" - "bill"
// Prediction:NaN, impossible de faire des soustractions entre deux chaines de caracteres
// Actual:NAN