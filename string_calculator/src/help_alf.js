function electrons_function() {}
electrons_function.prototype.play_game = function(array) {
	if(array){
		if(array.length < 4){
			return "Not enough dice thrown";
		}
		if(array.length > 6){
			return "To many dice thrown";
		}
		let result = 0;
		array.forEach(element => { 
			if(element === 3){	//add 2 for a 3
				result += 2;
			}else if(element === 5){ //add 4 for a 5
				result += 4;
			}
		});
		return result;
	}
	return "No dice thrown";
};
