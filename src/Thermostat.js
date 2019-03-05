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

Thermostat.prototype.up = function(){
  if(this.isPowerSavingModeOn() && this.temperature < 25){
  this.temperature++;
  };
};

Thermostat.prototype.down = function(){
  if (this.temperature > 10){
    this.temperature--;
  };




};
