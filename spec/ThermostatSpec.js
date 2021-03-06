"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("gets current temmperature", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("turns the temperature up()", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
  it("turns the temperature down()", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
  it("turns the temperature down() to only 10", function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature(i)).toEqual(10);
  });

  it("should have MINIMUMTEMP", function() {
    expect(thermostat.MINIMUMTEMP).toEqual(10);
  });

  it("can tell if thermostat is at MINIMUMTEMP", function() {
    expect(thermostat.isMinimumTemperature()).toEqual(false);
  });

  it("should have a PowerSaving mode by default", function() {
    expect(thermostat.isPowerSavingOn()).toEqual(true);
  });

  it("if powerSavingMode is off MAXIMUMTEMP is 32", function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.maxTemp).toEqual(32);
  });

  it("can switch powerSavingMode off", function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  it("switches powerSavingMode off", function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.powerSavingMode).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.powerSavingMode).toBe(true);
  });

  describe("when powerSavingMode on", function() {
    it("has a maximum temperature of 25", function() {
      thermostat.switchPowerSavingModeOn();
      for (var i = 0; i < 6; i++) {
        thermostat.up();
        console.log(thermostat.temperature);
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  it("can reset temperature to 20 with reset() function", function() {
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  describe("ask about current usage", function() {
    it("displaY low-usage when energy is low ", function() {
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });
    it("display medium-usage when energy is medium", function() {
      thermostat.temperature = 20;
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
    it("displays high-usage when energy is high", function() {
      thermostat.temperature = 26;
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
//You can ask about the thermostat's current energy usage:
//< 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
// describe('Thermostat', function() {
//
//   var thermostat;
//
//   beforeEach(function() {
//     thermostat = new Thermostat();
//   });
//
//   it('starts at 20 degrees', function() {
//     expect(thermostat.temperature).toEqual(20);
//   });
// });
