function electrons_function() {}
electrons_function.prototype.play_game = function(array) {
	let result;
	arrayfound : if(array){
		if (array.length < 4 || array.length > 6) { // Check if number of dices is out of the acceptable range
			result = (array.length < 4) ? "Not enough dice thrown" : "Too many dice thrown";
			break arrayfound;
		}
		result = 0;
		array.forEach(element => { 
			if(element < 1 || element > 6){
				result = "Dice not thrown correctly";
				array.length = 0;
			}else if(element == 3){	//add 2 for a 3
				result += 2;
			}else if(element == 5){ //add 4 for a 5
				result += 4;
			}
		});
	}else{
		result = "No dice thrown";
	}
	return result;
};
