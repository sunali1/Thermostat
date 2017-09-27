function Thermostat() {
  this.temperature = 20;
  this.MINIMUMTEMP = 10;
  this.powerSavingMode = true;
  this.maxTemp = 25;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.temperature < this.maxTemp) {
    this.temperature += 1;
  } else {
    return;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > this.MINIMUMTEMP) {
    this.temperature -= 1;
  } else {
    return;
  }

  Thermostat.prototype.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUMTEMP;
  };
  Thermostat.prototype.isPowerSavingOn = function() {
    return this.powerSavingMode === true;
  };
  Thermostat.prototype.switchPowerSavingModeOff = function() {
    this.powerSavingMode = false;
    this.maxTemp = 32;
  };
  Thermostat.prototype.switchPowerSavingModeOn = function() {
    this.powerSavingMode = true;
    this.maxTemp = 25;
  };
  Thermostat.prototype.reset = function() {
    this.temperature = 20;
  };
};
