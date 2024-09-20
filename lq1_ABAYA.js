//variable name, age, address
let fName = "Maria Delos Santos Las Marias";
let Age= 25;
let Address= "Upper Session Road, Baguio City, Benguet";

let Fis= "Juan Gamoso Dela Cruz";
let AgE= 28;
let ADdress= "San Nicolas, Candon City, Ilocos Sur";

//Split the names
let names = fName.split(" ");
let nice = Fis.split(" ");

//rearranging names using split and joined
let lName = names.slice(-2).join(" "); // Get last parts as last name
let upName = lName.toUpperCase(); //Turning to upper case

let lName2 = nice.slice(-2).join(" ");
let upName2 = lName2.toUpperCase();

let fNames = names.slice(0, -2).join(" "); // Get the rest as first name and middle name
let fNames2 = nice.slice(0, -2).join(" ");

//Reconstruct of the name
let rearName1 = "Name: "+ upName +", "+fNames;
let rearName2 = "Name: "+ upName2 +", "+ fNames2;
var game1 = rearName1 + " Age: " + Age + " Address: " + Address;
var game2 = rearName2 + " Age: " + AgE + " Address: " + ADdress;

//operation
let sumAll= fName.length + Fis.length + Address.length + ADdress.length + AgE + Age;
let sumAge = Age + AgE;
let subAge_name = sumAge - fName.length;
let Multi_Age_fis = subAge_name * Fis.length;
let p1Mp2 = Address.length ** ADdress.length;

//output of rearranging name to last name
console.log(game1); 
console.log(game2);

//output of all total
console.log(sumAll);
console.log(sumAge);
console.log(subAge_name);
console.log(Multi_Age_fis);
console.log(p1Mp2);