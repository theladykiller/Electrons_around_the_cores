function electrons_function() {}
electrons_function.prototype.play_game = function(array) {
	if(array){
		let result = 0;
		array.forEach(element => {
			if(element === 3){
				result += 2;
			}else if(element === 5){
				result += 4;
			}
		});
		return result;
	}
	return "No dice thrown";
};
