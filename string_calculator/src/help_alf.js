function electrons_function() {}
electrons_function.prototype.play_game = function(array) {
	let result;
	arrayfound : if(array){
		if(array.length < 4){ //break if not enough dices in array
			result = "Not enough dice thrown";
			break arrayfound;
		}
		if(array.length > 6){ //break if too many dices in array
			result = "To many dice thrown";
			break arrayfound;
		}
		result = 0;
		array.forEach(element => { 
			if(element === 3){	//add 2 for a 3
				result += 2;
			}else if(element === 5){ //add 4 for a 5
				result += 4;
			}
		});
	}else{
		result = "No dice thrown";
	}
	return result;
};
