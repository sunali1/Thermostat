function Thermostat() {
  this.temperature = 20;
  this.MINIMUMTEMP = 10;
  this.powerSavingMode = true;
  this.MAXIMUMTEMP = 32;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature > this.MINIMUMTEMP){
    this.temperature -= 1;
  } else {
  };

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUMTEMP
};
Thermostat.prototype.isPowerSavingOn = function() {
  return (this.powerSavingMode) === true
};
Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};
Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};
};
