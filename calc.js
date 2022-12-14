const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);

	//Console printout per variable
	console.log('mathSymbol', mathSymbol);
	console.log('num1' , num1);
	console.log('num2' , num2);

	//Addition printout
	if (mathSymbol === "+" ) {
		console.log(num1 + num2);
	}
	//Subtraction printout
	if (mathSymbol === "-") {
		console.log(num1 - num2);
	}
	//Multiplication printout
	if (mathSymbol === "*") {
		console.log(num1 * num2);
	}
	//Division printout
	if (mathSymbol === "/") {
		console.log(num1 / num2);
	}
	//Square root printout
	if (mathSymbol === "Square") {
		console.log(Math.sqrt(num1));
	}

	// This line closes the connection to the command line interface.
	reader.close()

});
