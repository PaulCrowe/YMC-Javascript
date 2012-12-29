// raw javascript

// make sure our javascript is connected be testing with the alert () function

// alert ('click ok for a chance to win a new car!!!!! Shoot 3 monkeys to win');

/*
var todaysWeather = ' -4 degrees and snowing';

todaysWeather = '36 degrees and humid';

alert (todaysWeather);
*/

//Checking out Functions
/*
function tellmeTodaysWeather(){
	//group of instructions that are related in this function
	var celsius = '16';
	var farenheit = '61';
	console.log('The weather today is '+ celsius + ' degrees celsius, and '+ farenheit +' degrees farenheit.');
}

// initiate the function

tellmeTodaysWeather();
*/

//Checking out Functions WITH arguments
function tellmeTodaysWeather(celsius, farenheit){
	//group of instructions that are related in this function
	var celsiusValue = celsius;
	var farenheitValue = farenheit;

	// set up a condition in case somebody messes up the celsius

	if( celsiusValue === undefined ){
		celsiusValue = 'unavailable'

	}
	if( farenheitValue === undefined ){
		farenheitValue = 'learn centigrade you ignorant yankee'

	}

	console.log('The weather today is '+ celsiusValue + ' degrees celsius, and '+ farenheitValue +' degrees farenheit.');
}

// initiate the function

tellmeTodaysWeather(0,undefined);

// Data types to keep in mind
// 'Strings' are enclosd by single or double quotes
// 'Floats' are numbers that are NOT surrounded by single quotes

//'+' operator has different role depending on whether you are using floats or Strings
// for Strings: it concatenates
// for floats: it adds them