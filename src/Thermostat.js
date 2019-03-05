function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.currentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  this.temperature++;
};

Thermostat.prototype.down = function(){
  if (this.temperature > 10){
    this.temperature--;
  };


};
