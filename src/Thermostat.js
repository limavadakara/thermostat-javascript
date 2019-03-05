function Thermostat(){
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.currentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode;
};

Thermostat.prototype.turnPowerSavingModeOff = function(){
  this.powerSavingMode = false;
};

Thermostat.prototype.up = function(){
  if (this.isPowerSavingModeOn()){
    if (this.temperature < 25){
    this.temperature++;
    }
  } else if (!this.isPowerSavingModeOn()){
      if (this.temperature < 32){
    this.temperature++;
    }
  };
};

Thermostat.prototype.down = function(){
  if (this.temperature > 10){
    this.temperature--;
  };

  Thermostat.prototype.reset = function(){
    this.temperature = 20;
    };

};
