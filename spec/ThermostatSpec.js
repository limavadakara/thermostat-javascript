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

  it('temperature can be decreased by 1', function(){
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('restricts the minimum temperature to 10 degrees', function(){
    var count = 11
    while (count > 0) {
      thermostat.down();
      count--;
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('by default the power saving mode should be on', function(){
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);

  });

  it('restricts the maximum temperature to 25 degrees when power saving mode is on', function(){
    var count = 6
    while (count > 0){
      thermostat.up();
      count--;
    }
    expect(thermostat.currentTemperature()).toEqual(25);

  });

});
