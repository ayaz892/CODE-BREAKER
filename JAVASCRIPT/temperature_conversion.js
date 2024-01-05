//initilaizing current forecast
const kelvin=293;
//subtract the 273 for convert  into celsius
let celsius=kelvin-273;

//calculate fahrenheit
let fahrenheit;
fahrenheit=celsius *(9/5) + 32;
//convert into whole no from decimal

fahrenheit=Math.floor(fahrenheit);
//print the temperature in fahrenheit
console.log("The Temperature is " + fahrenheit + " degrees Fahrenheit");

//convert from celcius to Newton
let newton=celsius*(33/100);
newton=Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);
