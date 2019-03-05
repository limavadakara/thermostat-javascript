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

  it('power saving mode can be switched off', function(){
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false);
  });

  it('restricts the maximum temperature to 25 degrees when power saving mode is on', function(){
    var count = 5;
    while (count > 0){
      thermostat.up();
      count--;
    }
    expect(function() {thermostat.up()}).toThrow("Max temp possible is 25 when power saving mode is on");
    expect(thermostat.currentTemperature()).toEqual(25);
  });

  it('restricts the maximum temperature to 32 degrees when power saving mode is off', function(){
    thermostat.turnPowerSavingModeOff();
    var count = 12;
    while (count > 0){
      thermostat.up();
      count--;
    };

    expect(function() {thermostat.up()}).toThrow("Max temp possible is 32 when power saving mode is off");
    expect(thermostat.currentTemperature()).toEqual(32);
  });

  it('resets the temperature to 20', function(){
    thermostat.turnPowerSavingModeOff();
    var count = 12;
    while (count > 0){
      thermostat.up();
      count--;
    };
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('returns high usage when temperature is 32 degrees', function(){

    thermostat.turnPowerSavingModeOff();
    var count = 12;
    while (count > 0){
      thermostat.up();
      count--;
    };
    expect(thermostat.energyUsage()).toEqual("High-Usage");
  });

  it('returns low usage when temperature is 17 degrees', function(){


    var count = 3;
    while (count > 0){
      thermostat.down();
      count--;
    };
    expect(thermostat.energyUsage()).toEqual("Low-Usage");
  });

  it('returns meduim usage when temperature is 20 degrees', function(){
    thermostat.reset();
    expect(thermostat.energyUsage()).toEqual("Medium-Usage");
  });

});
