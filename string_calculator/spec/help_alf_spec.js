describe('String Calculator', function() {
	beforeEach(function() {
		electrons = new electrons_function()
	});

	//todo 1
	it('should return "No dice thrown" if no variable was passed', function() {
		expect(electrons.play_game()).toEqual("No dice thrown");
	});

	//todo 2
	it('should return "2" if array is: [1,2,3,4]', function() {
		let array = [1,2,3,4];
		expect(electrons.play_game(array)).toEqual(2);
	});

	//todo 3
	it('should return "6" if array is: [1,2,3,4,5,6]', function() {
		let array = [1,2,3,4,5,6];
		expect(electrons.play_game(array)).toEqual(6);
	});

	//todo 4
	it('should return "Not enough dice thrown" if array is: [1,2,3]', function() {
		let array = [1,2,3];
		expect(electrons.play_game(array)).toEqual("Not enough dice thrown");
	});

	//todo 5
	it('should return "Too many dice thrown" if array is: [1,4,3,6,2,3,5]', function() {
		let array = [1,4,3,6,2,3,5];
		expect(electrons.play_game(array)).toEqual("Too many dice thrown");
	});

	//todo 6
	it('should return "Dice not thrown correctly" if array is: [3,4,0,8]', function() {
		let array = [3,4,0,8];
		expect(electrons.play_game(array)).toEqual("Dice not thrown correctly");
	});
});
