
//make variable for user to pick c or f
var tempPick = prompt("Enter temp choice with c for Celcius to Fahrenheit, or f for Fahrenheit to Celcius");
//enter temperature to convert
var temperature = prompt("Enter the temperature you would like to convert");
//create if statement to complete the conversion
 if (tempPick === "c") {
  temperature = ((temperature * 9) / 5) + 32;
  alert("The temperature in Fahrenheit is " + temperature);
  }
  else if (tempPick === "f") {
  temperature = ((temperature - 32) * 5) / 9;
  alert("The temperature in Celcius is: " + temperature);
  }
  else {
    prompt("Please enter c or f to convert!");
  }
