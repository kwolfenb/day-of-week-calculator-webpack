import { Day } from '../src/weekday.js';
describe('Day', function() {
  
  it('should test if the correct year is returned', function() {
    let randomYear  = new Day(1,1,1998);
    expect(randomYear.year).toEqual(1998);
  });

  it('should test whether a Date is a non leapyear', function() {
    let nonLeapYear  = new Day(1,1,1999);
    expect(nonLeapYear.isLeapYear(1999)).toEqual(false);
  });

  it('should test whether a Date is a leapyear', function() {
    let leapYear  = new Day(1,1,2004);
    expect(leapYear.isLeapYear(2004)).toEqual(true);
  });

  it('should test whether a Date divisible by 100 is a non leapyear', function() {
    let nonLeapYear  = new Day(1,1,1900);
    expect(nonLeapYear.isLeapYear(1900)).toEqual(false);
  });

  it('should test if  a Date divisible by 400 is a LeapYear', function() {
    let leapYear  = new Day(1,1,2000);
    expect(leapYear.isLeapYear(2000)).toEqual(true);
  });

  it('should count days up to a given year', function() {
    let daysFromYear  = new Day(1,1,4);
    console.log(daysFromYear.calculateDays());
    expect(daysFromYear.calculateDays()).toEqual(1095);
  });

  it('should add days up to month for leap year', function() {
    let monthAndYear  = new Day(1,5,4);
    console.log(monthAndYear.calculateDays());
    expect(monthAndYear.calculateDays()).toEqual(1216);
  });
  it('should add days up to month for non leap year', function() {
    let monthAndYear  = new Day(1,3,5);
    console.log(monthAndYear.calculateDays());
    expect(monthAndYear.calculateDays()).toEqual(1520);
  });

  });