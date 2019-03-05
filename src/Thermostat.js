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
    else { throw "Max temp possible is 25 when power saving mode is on"};

  }
  else if (!this.isPowerSavingModeOn()){
      if (this.temperature < 32){
        this.temperature++;
      }
      else { throw "Max temp possible is 32 when power saving mode is off" };
  };
};

Thermostat.prototype.down = function(){
  if (this.temperature > 10){
    this.temperature--;
  }
};

Thermostat.prototype.reset = function(){
    this.temperature = 20;
    };

Thermostat.prototype.energyUsage = function(){
  switch(true) {
    case (this.temperature > 25):
      return "High-Usage";
      break;
    case (this.temperature < 18):
      return "Low-Usage";
      break;
    case (this.temperature >= 18 && this.temperature <= 25):
      return "Medium-Usage";
      break;
  };
};
