'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('gets current temmperature', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });

  it('turns the temperature up()', function(){
    thermostat.up()
    expect(thermostat.temperature).toEqual(21);
  });
  it('turns the temperature down()',function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
  it('turns the temperature down() to only 10', function() {
    for(var i = 0; i < 11; i++){
    thermostat.down();
  }
    expect(thermostat.getCurrentTemperature(i)).toEqual(10)
  });

  it('should have MINIMUMTEMP', function() {
    expect(thermostat.MINIMUMTEMP).toEqual(10)
  });

  it('can tell if thermostat is at MINIMUMTEMP',function(){
    expect(thermostat.isMinimumTemperature()).toEqual(false)
  });

  it('should have a PowerSaving mode by default', function() {
    expect(thermostat.isPowerSavingOn()).toEqual(true)
  });

  it('if powerSavingMode is off MAXIMUMTEMP is 32', function() {
    this.powerSavingMode === false;
    expect(thermostat.MAXIMUMTEMP).toEqual(32)
  });

  it('can switch powerSavingMode off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  it('switches powerSavingMode off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.powerSavingMode).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.powerSavingMode).toBe(true);
  });
});

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
