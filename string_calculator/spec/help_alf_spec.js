describe('String Calculator', function() {
	beforeEach(function() {
		electrons = new electrons_function()
	});

	it('should return "No dice thrown" if no variable was passed', function() {
		expect(electrons.play_game()).toEqual("No dice thrown");
	});

	it('should return "2" if array is: [1,2,3,4] ', function() {
		let array = [1,2,3,4];
		expect(electrons.play_game(array)).toEqual(2);
	});
});
