describe('Thermostat', function() {
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it('starts at 20 degrees', function(){
    expect(thermostat.currentTemperature()).toEqual(20);
  });
  it('temperature can be increased by 1', function(){
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });
});
