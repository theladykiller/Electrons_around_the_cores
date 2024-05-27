describe('String Calculator', function() {
	beforeEach(function() {
		electrons = new electrons_function()
	});

	it('should return "No dice thrown" if no variable was passed', function() {
		expect(electrons.play_game()).toEqual("No dice thrown");
	});
});
